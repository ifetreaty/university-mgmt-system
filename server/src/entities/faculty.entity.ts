import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from './admin.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 20 })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Admin, (admin) => admin.faculty)
  admins: Admin[];
}
