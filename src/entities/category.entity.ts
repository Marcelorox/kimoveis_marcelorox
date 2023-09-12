import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity("category")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, unique: true, nullable: false })
  name: string;
}
