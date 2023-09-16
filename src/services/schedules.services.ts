import { Schedule } from "../entities";
import AppError from "../errors/app.errors";
import {
  ScheduleCreate,
  ScheduleReturn,
} from "../interfaces/schedules.interface";
import { realEstateRepo, schedulesRepo, userRepo } from "../repositories";
import { SchemaReturnOmit } from "../schemas/schedule.schema";

const create = async (payload: ScheduleCreate): Promise<ScheduleReturn> => {
  const { realEstateId, userId } = payload;

  const realStateFind = await realEstateRepo.findOne({
    where: { id: realEstateId },
  });
  if (!realStateFind) throw new AppError("No state found", 404);

  const userFind = await userRepo.findOne({
    where: { id: userId },
  });
  if (!userFind) throw new AppError("No user found", 404);
  const existingSchedule = await schedulesRepo.findOne({
    where: {
      user: { id: userId },
      date: new Date(payload.date),
      hour: new Date(payload.date + "T" + payload.hour),
    },
  });

  if (existingSchedule) {
    throw new AppError("Usuário já agendou uma visita nesta data e hora", 400);
  }

  const existingScheduleRealEstate = await schedulesRepo.findOne({
    where: {
      realEstate: { id: realEstateId },
      date: new Date(payload.date),
      hour: new Date(payload.date + "T" + payload.hour),
    },
  });

  if (existingScheduleRealEstate) {
    throw new AppError(
      "Já existe um agendamento para esta propriedade nesta data e hora",
      400
    );
  }

  const scheduleHour = new Date(payload.date + "T" + payload.hour);
  const startHour = new Date(payload.date + "T08:00:00");
  const endHour = new Date(payload.date + "T18:00:00");

  if (scheduleHour < startHour || scheduleHour > endHour) {
    throw new AppError(
      "Agendamento fora do horário comercial (08:00 às 18:00)",
      400
    );
  }
  const scheduledDate = new Date(payload.date);
  const dayOfWeek = scheduledDate.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new AppError("apenas dias úteis são permitidos", 400);
  }

  const schedule: Schedule = schedulesRepo.create(payload);

  await schedulesRepo.save(schedule);

  return SchemaReturnOmit.parse(schedule);
};

export default { create };
