import { realEstateRepo, addressesRepo, categoriesRepo } from "../repositories";
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
import AppError from "../errors/app.errors";

const create = async (payload: RealEstateCreate): Promise<RealEstateReturn> => {
  const { address, categoryId, ...body } = payload;

  const addressCreate = addressesRepo.create(address);
  await addressesRepo.save(addressCreate);

  const categoryFind = await categoriesRepo.findOne({
    where: { id: categoryId },
  });
  if (!categoryFind) throw new AppError("cannot found!", 404);

  const realEstate: RealEstate = realEstateRepo.create({
    ...body,
    address: addressCreate,
    category: categoryFind,
  });

  await realEstateRepo.save(realEstate);

  return RealEstateReturnSchema.parse(realEstate);
};

const read = async (): Promise<RealEstateRead> => {
  return RealEstateReadSchemas.parse(
    await realEstateRepo.find({ withDeleted: true })
  );
};

export default { create, read };
