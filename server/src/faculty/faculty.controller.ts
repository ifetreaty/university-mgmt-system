import { Body, Controller, Get, Post } from "@nestjs/common";
import { FacultyService } from "./faculty.service";
import { CreateFacultyDto } from "./dto/create-faculty.dto";
import { Faculty } from "src/entities/faculty.entity";

@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  async createFaculty(@Body() createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    return this.facultyService.createFaculty(createFacultyDto);
  }

  @Get()
  async getAllFaculty(): Promise<Faculty[]> {
    return this.facultyService.getAllFaculty();
  }
}