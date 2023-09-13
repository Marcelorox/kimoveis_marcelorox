import { z } from "zod";
import { Repository } from "typeorm";
import { Category } from "../entities/category.entity";
import { CategorySchema, CategorySchemaOmit } from "../schemas/category.schema";

type CategorieCreate = z.infer<typeof CategorySchemaOmit>;
type CategorieRead = z.infer<typeof CategorySchema>;

type CategorieRepos = Repository<Category>;

export { CategorieRepos, CategorieCreate, CategorieRead };
