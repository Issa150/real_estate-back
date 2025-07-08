// src/property/dto/create-property.dto.ts
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { ListingType, PropertyStatus } from '@prisma/client';

export class CreatePropertyDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  price: number;

  @IsString()
  type: string;

  @IsEnum(PropertyStatus)
  status: PropertyStatus;

  @IsEnum(ListingType)
  listingType: ListingType;

  @IsString()
  city: string;

  @IsString()
  department: string;

  @IsString()
  address: string;

  @IsInt()
  ownerId: number;

  @IsInt()
  agentId: number;

  @IsInt()
  agencyId: number;
}
