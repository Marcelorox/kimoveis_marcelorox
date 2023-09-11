import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
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

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  street: string;

  @Column({ type: "varchar", length: 8, nullable: false })
  zipCode: string;

  @Column({ type: "integer", nullable: false })
  number: number;

  @Column({ type: "varchar", length: 20, nullable: false })
  city: string;

  @Column({ type: "varchar", length: 2, nullable: false })
  state: string;
}

@Entity("category")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, unique: true, nullable: false })
  name: string;
}
