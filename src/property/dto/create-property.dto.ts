// src/property/dto/create-property.dto.ts
import { IsBoolean, IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { ListingType } from '@prisma/client';

export class CreatePropertyDto {
  // @IsString()
  // title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNumber()
  price: number;

  // @IsString()
  // type: string;

  @IsInt()
  rooms: number;

  @IsNumber()
  area: number;

  @IsOptional()
  @IsBoolean()
  isAvailable: boolean;

  @IsEnum(ListingType)
  listingType: ListingType;

  @IsString()
  city: string;

  @IsString()
  department: string;

  @IsString()
  address: string;

  @IsNumber()
  ownerId: number;

  @IsOptional()
  @IsInt()
  agentId: number;

  @IsInt()
  agencyId: number;
}
