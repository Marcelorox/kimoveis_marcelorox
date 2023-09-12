import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Users } from "../entities/user.entity";
import {
  UserCreateSchemasOmit,
  UserReturnSchema,
  UserReadSchemas,
} from "../schemas/users.schema";

type UserCreate = z.infer<typeof UserCreateSchemasOmit>;
type UserRead = z.infer<typeof UserReadSchemas>;
type UserReturn = z.infer<typeof UserReturnSchema>;

type UserRepos = Repository<Users>;

export { UserRead, UserReturn, UserRepos, UserCreate };
