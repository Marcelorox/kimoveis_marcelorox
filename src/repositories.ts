import { AppDataSource } from "./data-source";
import { Category } from "./entities/category.entity";
import { RealEstate } from "./entities/realEstate.entity";
import { User } from "./entities/user.entity";
import { CategorieRepos } from "./interfaces/categories.interface";
import { RealEstateRepos } from "./interfaces/realEstates.interface";
import { UserRepos } from "./interfaces/users.interface";

const userRepo: UserRepos = AppDataSource.getRepository(User);
const categoriesRepo: CategorieRepos = AppDataSource.getRepository(Category);
const RealEstateRepo: RealEstateRepos = AppDataSource.getRepository(RealEstate);

export { userRepo, categoriesRepo, RealEstateRepo };
