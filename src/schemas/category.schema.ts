import { z } from "zod";

const CategorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
});

const CategorySchemaOmit = CategorySchema.omit({ id: true });

export { CategorySchema, CategorySchemaOmit };
