import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { Schedule } from "./schedule.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true, nullable: false })
  email: string;

  @Column({ type: "boolean", default: false, nullable: false })
  admin: boolean;

  @Column({ type: "varchar", length: 120, nullable: false })
  password: string;

  @Column({ type: "date", nullable: false })
  createdAt: Date;

  @Column({ type: "date", nullable: false })
  updatedAt: Date;

  @Column({ type: "date" })
  deletedAt: Date | null;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Array<Schedule>;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);

    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
