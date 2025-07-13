// src/request/dto/create-request.dto.ts
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsInt()
  propertyId: number;

  @IsInt()
  clientId: number;

  @IsInt()
  @IsOptional()
  agentId: number;

  @IsString()
  @IsOptional()
  message: string;

  @IsOptional()
  scheduledVisit?: Date;
}
