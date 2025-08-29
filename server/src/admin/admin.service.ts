import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "src/entities/admin.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from "./dto/create-admin.dto";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async createAdmin(dto: CreateAdminDto): Promise<Admin> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const admin = this.adminRepository.create({
      ...dto,
      password: hashedPassword,
    });

    return this.adminRepository.save(admin);
  }

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(id: string): Promise<Admin | null> {
    return this.adminRepository.findOne({ where: { id } });
  }
}