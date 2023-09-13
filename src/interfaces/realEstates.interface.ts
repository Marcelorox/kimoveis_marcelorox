import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import {
  RealEstateReadSchemas,
  RealEstateReturnSchema,
  RealEstateSchemaOmit,
} from "../schemas/realEstate.schema";
import { RealEstate } from "../entities/realEstate.entity";

type RealEstateCreate = z.infer<typeof RealEstateSchemaOmit>;
type RealEstateRead = z.infer<typeof RealEstateReadSchemas>;
type RealEstateReturn = z.infer<typeof RealEstateReturnSchema>;

type RealEstateRepos = Repository<RealEstate>;

export { RealEstateRepos, RealEstateCreate, RealEstateRead, RealEstateReturn };
