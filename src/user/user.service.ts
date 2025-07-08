import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {


  constructor(private prisma: PrismaService) { }

  
  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        agentProfile: true,
      },
    });

    return users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    })
  }
  // most used methods
  findUserByEmail(id: number) {
    const user = this.prisma.user.findUnique({
      where: {
        id: id,
        deletedAt: null
      },
    })
    if (!user) throw new NotFoundException(`User with ID ${id} not found`)
    return user;
  }


  async findUserById(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
        deletedAt: null
      },
    })
    if (!user) throw new NotFoundException(`User with ID ${userId} not found`)
    return user;
  }
  //////////////////////////
  async softDelete(userId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { deletedAt: new Date() },
    });
  }
}
