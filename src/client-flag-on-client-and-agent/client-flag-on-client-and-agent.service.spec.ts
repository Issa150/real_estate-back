import { Test, TestingModule } from '@nestjs/testing';
import { ClientFlagOnClientAndAgentService } from './client-flag-on-client-and-agent.service';

describe('ClientFlagOnClientAndAgentService', () => {
  let service: ClientFlagOnClientAndAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientFlagOnClientAndAgentService],
    }).compile();

    service = module.get<ClientFlagOnClientAndAgentService>(ClientFlagOnClientAndAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
