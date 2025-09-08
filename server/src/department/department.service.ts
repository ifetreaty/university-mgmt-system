import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/entities/department.entity';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Faculty } from 'src/entities/faculty.entity';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async createDepartment(dto: CreateDepartmentDto): Promise<Department> {
    const department = this.departmentRepository.create({
      name: dto.name,
      description: dto.description,
      faculty: { id: dto.facultyId } as Faculty,
    });

    return this.departmentRepository.save(department);
  }

  async getAllDepartments(): Promise<Department[]> {
    return this.departmentRepository.find({ relations: ['faculty'] });
  }

  async getOneDepartment(id: string): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: ['faculty'],
    });

    if (!department) {
      throw new NotFoundException(`Department with ID {id} not found`);
    }

    return department;
  }

  async updateDepartment(
    id: string,
    dto: UpdateDepartmentDto,
  ): Promise<Department> {
    const department = await this.departmentRepository.preload({
      id,
      ...dto,
    });

    if (!department) {
      throw new NotFoundException(`Department with ID {id} not found`);
    }

    return this.departmentRepository.save(department);
  }

  async deleteDepartment(id: string): Promise<void> {
    const department = await this.getOneDepartment(id);
    await this.departmentRepository.remove(department);
  }
}
