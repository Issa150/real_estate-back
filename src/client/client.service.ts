import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PrismaService } from 'prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Role } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) { }

  async create(userId: number, dto: CreateClientDto) {
    await this.userService.findUserById(userId);
    return this.prisma.clientProfile.create({
      data: {
        ...dto,
        user: { connect: { id: userId } },
      },
    });
  }

  async findAll() {
    return this.prisma.clientProfile.findMany({
      include: { user: true },
      where: {
        user: {
          deletedAt: null, // Ensure we only get active users
        },
      }
    });
  }

  async findOne(id: number) {
    const client = await this.prisma.clientProfile.findFirst({
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

    
    if (!client || client.user.deletedAt) {
      throw new NotFoundException(`Client with user ID ${id} not found or deleted`);
    }

    return {
      id: client.user.id,
      email: client.user.email,
      firstname: client.user.firstname,
      lastname: client.user.lastname,
      phone: client.user.phone,
      profilePicture: client.user.profilePicture,
      isActive: client.user.isActive,
      client: {
        isverfiledOwner: client.isVerifiedOwner,
        familyStatus: client.familyStatus,
        isHandicapped: client.isHandicapped,
        personalIncome: client.personalIncome,
        householdIncome: client.householdIncome,
        isPriority: client.isPriority,
      },
    }

    return client;
  }

  async update(userId: number, dto: UpdateClientDto) {
    // First, finding the client profile by userId
    console.log("❤️❤️", userId, dto);
    const client = await this.prisma.clientProfile.findFirst({
      where: {
        user: {
          id: userId,
          deletedAt: null,
        },
      },
    });

    if (!client) throw new NotFoundException(`Client profile for user ID ${userId} not found`);

    console.log("❤️❤️", client.id, userId, client);
    return this.prisma.clientProfile.update({
      where: {
        id: client.id, // Using the found client's ID 
      },
      data: dto,
    });
  }

  async remove(id: number) {
    const client = await this.prisma.clientProfile.findUnique({ where: { id } });
    if (!client) {
      // Same logic: only care if user exists
      throw new Error(`Client profile with ID ${id} not found`);
    }

    return this.prisma.clientProfile.delete({
      where: { id },
    });
  }
}
