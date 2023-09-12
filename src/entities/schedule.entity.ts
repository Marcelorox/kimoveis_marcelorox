import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { Users } from "./user.entity";

@Entity("schedule")
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date", nullable: false })
  date: Date;

  @Column({ type: "time", nullable: false })
  hour: Date;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule)
  realEstate: RealEstate;

  @ManyToOne(() => Users, (user) => user.schedules)
  user: Users;
}
