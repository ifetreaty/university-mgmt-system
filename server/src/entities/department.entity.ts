import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Faculty } from './faculty.entity';
import { Student } from './student.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.departments, {
    onDelete: 'CASCADE',
  })
  faculty: Faculty;

  @OneToMany(() => Student, (student) => student.department)
  students: Student[];

  // @OneToMany(() => Course, (course) => course.department)
  // courses: Course[];
}
