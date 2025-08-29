// src/property/property.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) { }

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    try {

      return this.propertyService.create(dto);
    } catch (error) {
      console.error('Error creating property:', error);
      throw error;
    }
  }

  @Get("clinets")
  findAllForClient() {
    return this.propertyService.findAllForClient();
  }

  @Get("agent/:id")
  findAllForAgent(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findAllForAgent(id);
  }

  @Get('requests/:id')
  getRequestsForProperty(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.getRequestsForProperty(id);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePropertyDto) {
    return this.propertyService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.remove(id);
  }
}
