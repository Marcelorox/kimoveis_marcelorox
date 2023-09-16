import { AppDataSource } from "./data-source";
import { Address, Schedule } from "./entities";
import { Category } from "./entities/category.entity";
import { RealEstate } from "./entities/realEstate.entity";
import { User } from "./entities/user.entity";
import { CategorieRepos } from "./interfaces/categories.interface";
import { RealEstateRepos } from "./interfaces/realEstates.interface";
import { ScheduleRepos } from "./interfaces/schedules.interface";
import { UserRepos } from "./interfaces/users.interface";

const userRepo: UserRepos = AppDataSource.getRepository(User);
const categoriesRepo: CategorieRepos = AppDataSource.getRepository(Category);
const realEstateRepo: RealEstateRepos = AppDataSource.getRepository(RealEstate);
const addressesRepo = AppDataSource.getRepository(Address);
const schedulesRepo: ScheduleRepos = AppDataSource.getRepository(Schedule);

export {
  userRepo,
  categoriesRepo,
  realEstateRepo,
  schedulesRepo,
  addressesRepo,
};
