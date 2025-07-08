// src/client/client.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post(':userId')
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: CreateClientDto,
  ) {
    return this.clientService.create(userId, dto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateClientDto,
  ) {
    return this.clientService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.remove(id);
  }
}
