import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Users } from "../entities/user.entity";
import AppError from "../errors/app.errors";
import {
  UserCreate,
  UserRead,
  UserReturn,
} from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { UserReadSchemas, UserReturnSchema } from "../schemas/users.schema";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: Users = userRepo.create(payload);
  await userRepo.save(user);

  return UserReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return UserReadSchemas.parse(await userRepo.find({ withDeleted: true }));
};

const patch = async (user: Users, payload: Users): Promise<UserReturn> => {
  const updateUser: Users = await userRepo.save({
    ...user,
    ...payload,
  });

  return UserReturnSchema.parse(updateUser);
};

const destroy = async (user: Users): Promise<void> => {
  await userRepo.softRemove(user);
};

const login = async (payload: Users) => {
  const user = await userRepo.findOne({
    where: { email: payload.email },
  });

  if (!user) {
    throw new AppError("Wrong email/password", 401);
  }

  const passwordVerify: boolean = await compare(
    payload.password,
    user.password
  );

  if (!passwordVerify) {
    throw new AppError("Wrong email/password", 401);
  }

  const token: string = sign(
    {
      email: user.email,
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { create, read, destroy, login, patch };
