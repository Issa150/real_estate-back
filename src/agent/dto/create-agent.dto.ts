// src/agent/dto/create-agent.dto.ts
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateAgentDto {
  @IsInt()
  agencyId: number;

  @IsEnum(Role, { message: 'Position must be AGENT or MANAGER' })
  position: Role;

  @IsOptional()
  performanceScore?: number;
}
