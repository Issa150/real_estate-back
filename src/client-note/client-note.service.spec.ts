import { Test, TestingModule } from '@nestjs/testing';
import { ClientNoteService } from './client-note.service';

describe('ClientNoteService', () => {
  let service: ClientNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientNoteService],
    }).compile();

    service = module.get<ClientNoteService>(ClientNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
