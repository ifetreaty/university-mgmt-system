import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from '../entities/admin.entity';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Admin> {
    const admin = await this.adminService.findOne(id);

    if (!admin) {
      throw new NotFoundException(`Admin with id ${id} not found`);
    }

    return admin;
  }
}


// Create an enum folder and put the 'Gender', 'Status' under student enum, etc there
// use uuid not regular ids. Implement that
// type: string (var char), not 'enum' to prevent migration runs whenever there's a change ** leave for now
// create columns yourself using pgadmin directly
// set up send grid account for notifications
// create default password for student entity