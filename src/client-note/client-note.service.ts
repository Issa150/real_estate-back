import { Injectable } from '@nestjs/common';
import { CreateClientNoteDto } from './dto/create-client-note.dto';
import { UpdateClientNoteDto } from './dto/update-client-note.dto';

@Injectable()
export class ClientNoteService {
  create(createClientNoteDto: CreateClientNoteDto) {
    return 'This action adds a new clientNote';
  }

  findAll() {
    return `This action returns all clientNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientNote`;
  }

  update(id: number, updateClientNoteDto: UpdateClientNoteDto) {
    return `This action updates a #${id} clientNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientNote`;
  }
}
