import { z } from "zod";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { SchemaCreate, SchemaReturnOmit } from "../schemas/schedule.schema";

type ScheduleCreate = z.infer<typeof SchemaCreate>;
type ScheduleRead = z.infer<typeof SchemaCreate>;
type ScheduleReturn = z.infer<typeof SchemaReturnOmit>;

type ScheduleRepos = Repository<Schedule>;

export { ScheduleCreate, ScheduleRead, ScheduleReturn, ScheduleRepos };
