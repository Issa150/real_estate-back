// src/client/client.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) { }

  async create(userId: number, dto: CreateAgentDto) {
  await this.userService.findUserById(userId);

  return this.prisma.agentProfile.create({
    data: {
      userId, 
      agencyId: dto.agencyId,
      position: dto.position,
      performanceScore: dto.performanceScore,
    },
  });
}

  async findAll() {
    return this.prisma.agentProfile.findMany({
      include: { user: true },
      where: {
        user: {
          deletedAt: null, // Ensure we only get active users
        },
      }
    });
  }

  async findOne(id: number) {
    const agent = await this.prisma.agentProfile.findFirst({
      where: {
        user: {
          id: id,
          deletedAt: null, // Ensuring we only get active users
        }
      },
      include: {
        user: true,
      },
    });

    if (!agent || agent.user.deletedAt) {
      throw new NotFoundException(`Client with user ID ${id} not found or deleted`);
    }

    return agent;
  }

  async update(userId: number, dto: UpdateAgentDto) {
    // First, finding the client profile by userId
    const agent = await this.prisma.agentProfile.findFirst({
      where: {
        user: {
          id: userId,
          deletedAt: null,
        },
      },
    });

    if (!agent) throw new NotFoundException(`Client profile for user ID ${userId} not found`);

    console.log("❤️❤️", agent.id, userId, agent);
    return this.prisma.agentProfile.update({
      where: {
        id: agent.id, // Using the found client's ID 
      },
      data: dto,
    });
  }

  async remove(id: number) {
    const agent = await this.prisma.agentProfile.findUnique({ where: { id } });
    if (!agent) {
      // Same logic: only care if user exists
      throw new Error(`Agent profile with ID ${id} not found`);
    }

    return this.prisma.agentProfile.delete({
      where: { id },
    });
  }
}
