import { z } from "zod";

const Schema = z.object({
  id: z.number().positive(),
  date: z.date(),
  hour: z.string().max(10),
  realEstateId: z.number().positive().int(),
  userId: z.number().positive().int(),
});

const SchemaReturnOmit = Schema.omit({
  id: true,
});
const SchemaCreate = SchemaReturnOmit;

const ReadSchemas = SchemaReturnOmit.array();

export { Schema, ReadSchemas, SchemaCreate, SchemaReturnOmit };
