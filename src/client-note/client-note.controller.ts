import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientNoteService } from './client-note.service';
import { CreateClientNoteDto } from './dto/create-client-note.dto';
import { UpdateClientNoteDto } from './dto/update-client-note.dto';

@Controller('client-note')
export class ClientNoteController {
  constructor(private readonly clientNoteService: ClientNoteService) {}

  @Post()
  create(@Body() createClientNoteDto: CreateClientNoteDto) {
    return this.clientNoteService.create(createClientNoteDto);
  }

  @Get()
  findAll() {
    return this.clientNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientNoteDto: UpdateClientNoteDto) {
    return this.clientNoteService.update(+id, updateClientNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientNoteService.remove(+id);
  }
}
