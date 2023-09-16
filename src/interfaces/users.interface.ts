import { z } from "zod";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import {
  UserCreateSchemasOmit,
  UserReturnSchema,
  UserReadSchemas,
} from "../schemas/users.schema";

type UserCreate = z.infer<typeof UserCreateSchemasOmit>;
type UserRead = z.infer<typeof UserReadSchemas>;
type UserReturn = z.infer<typeof UserReturnSchema>;

type UserRepos = Repository<User>;

interface maluco {
  id: string
}

export { UserRead, UserReturn, UserRepos, UserCreate };
