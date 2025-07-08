// src/request/request.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() dto: CreateRequestDto) {
    return this.requestService.create(dto);
  }

  // @Get()
  // findAll() {
  //   return this.requestService.findAll();
  // }

  @Get()
  async findAllClientRequests() {
    return this.requestService.findAllClientRequests();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRequestDto) {
    return this.requestService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.remove(id);
  }
}
