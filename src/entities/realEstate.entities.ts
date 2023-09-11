import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./category.entities";

@Entity("realestate")
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean", default: false, nullable: false })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 0,
    nullable: false,
  })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @Column({ type: "date", nullable: false })
  createdAt: Date;

  @Column({ type: "date", nullable: false })
  updatedAt: Date;

  @ManyToOne(() => Address, (address) => address.id)
  address: Address;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;
}
