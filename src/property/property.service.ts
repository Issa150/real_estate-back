// src/property/property.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: {
        title: dto.title,
        description: dto.description,
        price: dto.price,
        type: dto.type,
        status: dto.status,
        listingType: dto.listingType,
        city: dto.city,
        department: dto.department,
        address: dto.address,
        ownerId: dto.ownerId,
        agentId: dto.agentId,
        agencyId: dto.agencyId,
      },
    });
  }

  async findAll() {
    return await this.prisma.property.findMany({
      select: {
        id: true,
        price: true,
        listingType: true,
        department: true,
        images: true,
      },
    });
  }

  async findOne(id: number) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      select:{
        id: true,
        description: true,
        price: true,
        type: true,
        status: true,
        listingType: true,
        city: true,
        department: true,
        address: true,
        agency: true,
      }
    });

    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }

    return property;
  }

  async update(id: number, dto: UpdatePropertyDto) {
    await this.findOne(id); // ensuring it exists
    return this.prisma.property.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // ensuring it exists
    return this.prisma.property.delete({
      where: { id },
    });
  }
}
