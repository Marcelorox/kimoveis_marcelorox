import { z } from "zod";

const UserSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(100).email(),
  password: z.string().max(150),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const UserCreateSchemasOmit = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const UserReturnSchema = UserSchema.omit({ password: true });
const UserReadSchemas = UserReturnSchema.array();

export { UserReadSchemas, UserReturnSchema, UserCreateSchemasOmit };
