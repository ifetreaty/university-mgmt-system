import { Gender } from 'src/enums/gender.enum';
import { Status } from 'src/enums/status.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  firstName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ type: 'enum', enum: Gender, nullable: true })
  gender: Gender;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ unique: true })
  matricNumber: string;

  @Column()
  faculty: string;

  @Column()
  department: string;

  @Column({ type: 'int' })
  level: number;

  @Column({ type: 'enum', enum: Status, default: Status.ACTIVE })
  status: Status;

  @Column({ nullable: true })
  roleId: number;
}

// not done yet. We need to create faculty and department and tie a student to both. 

// read upn on how to tie relationships (decorators to show relationships)