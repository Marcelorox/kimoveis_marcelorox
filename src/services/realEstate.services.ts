import { RealEstateRepo, categoriesRepo } from "../repositories";
import {
  RealEstateReadSchemas,
  RealEstateReturnSchema,
} from "../schemas/realEstate.schema";
import { RealEstate } from "../entities/realEstate.entity";
import {
  RealEstateCreate,
  RealEstateRead,
  RealEstateReturn,
} from "../interfaces/realEstates.interface";
import { Category } from "../entities";

const create = async (payload: RealEstateCreate): Promise<RealEstateReturn> => {
  const realEstate: RealEstate = RealEstateRepo.create(payload);
  const catergoriesToCreate: Category = await categoriesRepo.create();
  await categoriesRepo.save(realEstate);

  return RealEstateReturnSchema.parse(realEstate);
};

const read = async (): Promise<RealEstateRead> => {
  return RealEstateReadSchemas.parse(
    await RealEstateRepo.find({ withDeleted: true })
  );
};

export default { create, read };
