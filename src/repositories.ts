import { AppDataSource } from "./data-source";
import { Users } from "./entities/user.entity";
import { UserRepos } from "./interfaces/users.interface";

const userRepo: UserRepos = AppDataSource.getRepository(Users);

export { userRepo };
