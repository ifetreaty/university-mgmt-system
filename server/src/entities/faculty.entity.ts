import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 20})
  name: string;
}