import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {


  constructor(private prisma: PrismaService) { }


  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        profilePicture: true,
        role: true
      }
    });


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



  /**
   * 
   * @param userId 
   * @returns Only connected user general user informations
   */
  async getMyInfoById(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
        deletedAt: null
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        profilePicture: true,
        role: true
      }
    })
    if (!user) throw new NotFoundException(`User with ID ${userId} not found`)
    return user;
  }
  /**
   * 
   * @param userId 
   * @returns Only user general informations
   */
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


  /**
   * 
   * @param userId 
   * @returns Only user Role based profile informations
   */
  async getUserRoleBasedProfileById(userId: number) {
    // finding only profiles related to roles
    // const user = await this.prisma.clientProfile.findUnique({
    const clientProfile = await this.prisma.clientProfile.findUnique({
      where: {
        userId: userId
      },
      // select: {
      //   // role: true,
      //   clientProfile: true,
      //   agentProfile: true,
      // }
    })

    if (!clientProfile) throw new NotFoundException(`Profile with ID ${userId} not found`)

    // if (user.role == "AGENT") return user.agentProfile

    // retuning specific object for client
    // if(user.role == "CLIENT") return user.clientProfile
     return clientProfile
  }



  async updateUserById(userId: number, updateUserDto: UpdateUserDto) {
  const user = await this.findUserById(userId);
  if (!user) throw new NotFoundException(`User with ID ${userId} not found`)

  return this.prisma.user.update({
    where: { id: userId },
    data: updateUserDto

  })
}
  //////////////////////////
  async softDelete(userId: number) {
  return this.prisma.user.update({
    where: { id: userId },
    data: { deletedAt: new Date() },
  });
}
}
