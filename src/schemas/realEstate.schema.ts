import { z } from "zod";

const RealEstateSchema = z.object({
  id: z.number().positive(),
  size: z.number().max(50),
  value: z.string(),
  address: z.object({
    street: z.string().max(45),
    zipcode: z.string().max(8),
    number: z.number().positive(),
    city: z.string(),
    state: z.string(),
  }),
  categoryId: z.number().int(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const RealEstateSchemaOmit = RealEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const RealEstateReturnSchema = RealEstateSchemaOmit.omit({ sold: true });

const RealEstateReadSchemas = RealEstateReturnSchema.array();

export {
  RealEstateReturnSchema,
  RealEstateReadSchemas,
  RealEstateSchemaOmit,
  RealEstateSchema,
};
