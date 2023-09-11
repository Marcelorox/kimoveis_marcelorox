import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./realEstate.entities";
import { Users } from "./user.schedule";

@Entity("schedule")
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date", nullable: false })
  date: Date;

  @Column({ type: "time", nullable: false })
  hour: Date;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.id)
  realEstate: RealEstate;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users;
}
