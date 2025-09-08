import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'src/entities/department.entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Faculty } from 'src/entities/faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Faculty])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
