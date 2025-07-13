// src/request/request.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRequestDto) {
    return this.prisma.request.create({
      data: {
        propertyId: dto.propertyId,
        clientId: dto.clientId,
        agentId: dto.agentId,
        scheduledVisit: dto.scheduledVisit,
      },
    });
  }
  /*
  async findAll() {
    const requests = await this.prisma.request.findMany({
      select:{
        propertyId: true,
        status: true,
        // updatedAt: true,
        createdAt: true,
        client:{
          select:{
            user:{
              select: {
                id: true,
                firstname: true,
                lastname: true,
                role: true,
              }
            }
          }
        },
        agent: {
          select: {
            user: {
              select: {
                id: true,
                firstname: true,
                lastname: true,
                role: true,
              }
            }
          }
        },
      }
    });

    if (!requests || requests.length === 0) {
      return [];
    }

    // Flatten the client user object for each request
    return requests.map(req => ({
      ...req,
      client: req.client.user, // Flatten the client user object
      agent: req.agent.user, // Flatten the agent user object
    }));
  }
  */

  async findAllClientRequests() {
    const requests = await this.prisma.request.findMany({
      select: {
        propertyId: true,
        status: true,
        createdAt: true,
        client: {
          select: {
            user: {
              select: {
                id: true,
                firstname: true,
                lastname: true,
                role: true,
              }
            }
          }
        }
      }
    });
    if (!requests || requests.length === 0) {
      return [];
    }
    return requests.map(req => ({
      ...req,
      client: req.client.user, // Flatten the agent user object
    }));
  }

  async findOne(id: number) {
    const request = await this.prisma.request.findUnique({
      where: { id },
      include: {
        property: true,
        client: { include: { user: true } },
        agent: { include: { user: true } },
      },
    });

    if (!request) throw new NotFoundException(`Request with ID ${id} not found`);
    return request;
  }

  async update(id: number, dto: UpdateRequestDto) {
    await this.findOne(id); // ensure it exists
    return this.prisma.request.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // ensure it exists
    return this.prisma.request.delete({
      where: { id },
    });
  }
}