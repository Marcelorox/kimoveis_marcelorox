import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity("users")
export class Users {
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
  deletedAt: Date;
}
