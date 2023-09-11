import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
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
