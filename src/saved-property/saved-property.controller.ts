import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavedPropertyService } from './saved-property.service';
import { CreateSavedPropertyDto } from './dto/create-saved-property.dto';
import { UpdateSavedPropertyDto } from './dto/update-saved-property.dto';

@Controller('saved-property')
export class SavedPropertyController {
  constructor(private readonly savedPropertyService: SavedPropertyService) {}

  @Post()
  create(@Body() createSavedPropertyDto: CreateSavedPropertyDto) {
    return this.savedPropertyService.create(createSavedPropertyDto);
  }

  @Get()
  findAll() {
    return this.savedPropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savedPropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavedPropertyDto: UpdateSavedPropertyDto) {
    return this.savedPropertyService.update(+id, updateSavedPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savedPropertyService.remove(+id);
  }
}
