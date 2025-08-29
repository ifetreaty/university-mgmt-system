import { IsEmail, IsEnum, IsOptional, IsString, IsDateString, IsInt, IsNotEmpty } from 'class-validator';
import { Gender } from 'src/enums/gender.enum';
import { Status } from 'src/enums/status.enum';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsString()
  @IsNotEmpty()
  matricNumber: string;

  @IsString()
  faculty: string;

  @IsString()
  department: string;

  @IsInt()
  level: number;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  roleId?: number;
}
