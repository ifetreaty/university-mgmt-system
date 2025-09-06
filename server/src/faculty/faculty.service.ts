import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from 'src/entities/faculty.entity';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

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
    return this.facultyRepository.find({ relations: ['admins'] });
  }

  async getOneFaculty(id: string): Promise<Faculty> {
    const faculty = await this.facultyRepository.findOne({
      where: { id },
      relations: ['departments', 'admins'],
    });

    if (!faculty) {
      throw new NotFoundException(`Faculty with ID {id} not found`);
    }

    return faculty;
  }

  async updateFaculty(id: string, dto: UpdateFacultyDto): Promise<Faculty> {
    const faculty = await this.facultyRepository.preload({
      id,
      ...dto,
    });

    if (!faculty) {
      throw new NotFoundException(`Faculty with id {id} not found`);
    }

    return this.facultyRepository.save(faculty);
  }

  async deleteFaculty(id: string): Promise<void> {
    const faculty = await this.getOneFaculty(id);
    await this.facultyRepository.remove(faculty);
  }
}
