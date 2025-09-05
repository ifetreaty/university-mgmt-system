import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from 'src/entities/faculty.entity';

@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  async createFaculty(
    @Body() createFacultyDto: CreateFacultyDto,
  ): Promise<Faculty> {
    return this.facultyService.createFaculty(createFacultyDto);
  }

  @Get()
  async getAllFaculty(): Promise<Faculty[]> {
    return this.facultyService.getAllFaculty();
  }

  @Get(':id')
  async getOneFaculty(@Param('id') id: string): Promise<Faculty> {
    return this.facultyService.getOneFaculty(id);
  }

  @Put(':id')
  async updateFaculty(
    @Param('id') id: string,
    @Body() body: Partial<Faculty>,
  ): Promise<Faculty> {
    return this.facultyService.updateFaculty(id, body);
  }

  @Delete(':id')
  async deleteFaculty(@Param('id') id: string): Promise<void> {
    return this.facultyService.deleteFaculty(id);
  }
}
