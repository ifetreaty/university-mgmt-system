import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(dto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(dto);
    return this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}