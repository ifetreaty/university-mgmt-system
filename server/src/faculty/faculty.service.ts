import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Faculty } from "src/entities/faculty.entity";
import { Repository } from "typeorm";
import { CreateFacultyDto } from "./dto/create-faculty.dto";

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async createFaculty(dto: CreateFacultyDto): Promise<Faculty> {
    const faculty = this.facultyRepository.create(dto);
    return this.facultyRepository.save(faculty);
  }

  async getAllFaculty(): Promise<Faculty[]> {
    return this.facultyRepository.find();
  }
}