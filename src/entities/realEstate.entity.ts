import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

@Entity("realestate")
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "integer" })
  size: number;

  @Column({ type: "boolean", default: false, nullable: false })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 0,
    nullable: false,
  })
  value: string;

  @Column({ type: "date", nullable: false })
  createdAt: Date;

  @Column({ type: "date", nullable: false })
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category)
  category: Category;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedule: Schedule;
}
