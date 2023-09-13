import { categoriesRepo } from "../repositories";
import { Category } from "../entities/category.entity";
import { CategorySchema } from "../schemas/category.schema";
import { CategorieRead } from "../interfaces/categories.interface";

const create = async (payload: CategorieRead): Promise<Category> => {
  const category: Category = categoriesRepo.create(payload);
  await categoriesRepo.save(category);

  return CategorySchema.parse(category);
};

const read = async (): Promise<Category> => {
  return CategorySchema.parse(await categoriesRepo.find({ withDeleted: true }));
};

export default { create, read };
