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
        rooms: dto.rooms,
        area: dto.area,
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

  async findAllForClient() {
    return await this.prisma.property.findMany({
      select: {
        id: true,
        price: true,
        rooms: true,
        area: true,
        listingType: true,
        city: true,
        images: true,
      },
    });
  }

  async findAllForAgent() {
    const primeRes = await this.prisma.property.findMany({
      select: {
        id: true,
        price: true,
        rooms: true,
        area: true,
        listingType: true,
        city: true,
        images: true,
        owner: {
          select: {
            user: {
              select: {
                id: true,
                firstname: true,
                lastname: true,
                profilePicture: true,
              }
            }

          },
        },
        // count number of requests for the property id
        _count: {
          select: {
            requests: true,
          }
        },
        // requests:{
        //   select: {
        //     id: true,
        //     client: {
        //       select: {
        //         user: {
        //           select: {
        //             id: true,
        //             firstname: true,
        //             lastname: true,
        //             profilePicture: true,
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
      },
    });
    // returning a flat json object of primeRes
    return primeRes.map(property => ({
      id: property.id,
      price: property.price,
      rooms: property.rooms,
      area: property.area,
      listingType: property.listingType,
      city: property.city,
      images: property.images,
      owner: {
        id: property.owner.user.id,
        firstname: property.owner.user.firstname,
        lastname: property.owner.user.lastname,
        profilePicture: property.owner.user.profilePicture,
      },
      requestsCount: property._count.requests,
    }));
  }

  async getRequestsForProperty(id: number) {
    const property = await this.prisma.property.findMany({
      where: { id },
      select: {
        requests: {
          select: {
            id: true,
            client: {
              select: {
                id: true,
                firstname: true,
                lastname: true,
                profilePicture: true,
              }
            }
          }
        }
      }


    })
    // flat json object of property.requests
    if (property.length === 0) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return property[0].requests.map(request => ({
      id: request.id,
      client: {
        id: request.client.id,
        firstname: request.client.firstname,
        lastname: request.client.lastname,
        profilePicture: request.client.profilePicture,
      }
    }));
  }


  async findOne(id: number) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      select: {
        id: true,
        description: true,
        price: true,
        type: true,
        rooms: true,
        area: true,
        status: true,
        listingType: true,
        city: true,
        department: true,
        address: true,
        // agency: true,
        images: true,
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
