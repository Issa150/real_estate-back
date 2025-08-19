import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  findAllUser(){
    return this.userService.findAll()
  }

  /**
   * 
   * @param userId 
   * @returns Only connected user general user informations
   */
  @Get('me/:id')
  getMyInfoById(@Param('id', ParseIntPipe) id: number) {
    
    return this.userService.getMyInfoById(id)
  }
  /**
   * 
   * @param id 
   * @returns Getting all general user infos (prfile)
   */
  @Get('info/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id)
  }

  /**
   * 
   * @param userId 
   * @returns Only user Role related profile informations
   */
  @Get('role-profile/:id')
  getUserRoleBasedProfileById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserRoleBasedProfileById(id)
  }


  // update user by id
  @Patch(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    console.log('data recieved:', updateUserDto)
    return this.userService.updateUserById(id, updateUserDto);
  }
}
