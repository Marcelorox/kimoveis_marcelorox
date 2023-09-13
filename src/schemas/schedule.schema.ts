import { z } from "zod";

const SchedulesSchema = z.object({
  id: z.number().positive(),
  date: z.date(),
  hour: z.string().max(10),
  realEstateId: z.number().int(),
  userId: z.number(),
});

const SchedulesCreateSchemasOmit = SchedulesSchema.omit({
  id: true,
});

export { SchedulesSchema, SchedulesCreateSchemasOmit };
