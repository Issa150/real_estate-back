import { Test, TestingModule } from '@nestjs/testing';
import { ClientNoteController } from './client-note.controller';
import { ClientNoteService } from './client-note.service';

describe('ClientNoteController', () => {
  let controller: ClientNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientNoteController],
      providers: [ClientNoteService],
    }).compile();

    controller = module.get<ClientNoteController>(ClientNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
