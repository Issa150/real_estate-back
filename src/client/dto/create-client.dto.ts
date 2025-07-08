// src/client/dto/create-client.dto.ts
import { IsOptional, IsString, IsBoolean, IsEnum, IsInt } from 'class-validator';
import { FamilyStatus } from '@prisma/client';

export class CreateClientDto {
  // @IsString()
  // firstname: string;

  // @IsString()
  // lastname: string;

  @IsOptional()
  @IsBoolean()
  isVerifiedOwner?: boolean;

  @IsOptional()
  @IsEnum(FamilyStatus)
  familyStatus?: FamilyStatus;

  @IsOptional()
  @IsBoolean()
  isHandicapped?: boolean;

  @IsOptional()
  @IsInt()
  personalIncome?: number;

  @IsOptional()
  @IsInt()
  householdIncome?: number;

  @IsOptional()
  @IsBoolean()
  isPriority?: boolean;
}
