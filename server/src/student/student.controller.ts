import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from '../entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.createStudent(createStudentDto);
  }

  @Get()
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }
}