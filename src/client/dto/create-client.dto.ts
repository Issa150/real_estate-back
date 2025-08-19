// src/client/dto/create-client.dto.ts
import { IsOptional, IsString, IsBoolean, IsEnum, IsInt } from 'class-validator';
import { FamilyStatus } from '@prisma/client';

export class CreateClientDto {
  // @IsString()
  // firstname: string;

  // @IsString()
  // lastname: string;

  // @IsOptional()
  // @IsBoolean()
  // isVerifiedOwner?: boolean; // This should be dones by admin, not the client

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

  // @IsOptional()
  // @IsBoolean()
  // isPriority?: boolean; // a client can not make himself priority, it is set by the admin
}
