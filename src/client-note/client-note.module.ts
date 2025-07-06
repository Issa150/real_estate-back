import { Module } from '@nestjs/common';
import { ClientNoteService } from './client-note.service';
import { ClientNoteController } from './client-note.controller';

@Module({
  controllers: [ClientNoteController],
  providers: [ClientNoteService],
})
export class ClientNoteModule {}
