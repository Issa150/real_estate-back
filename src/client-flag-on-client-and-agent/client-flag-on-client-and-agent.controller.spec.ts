import { Test, TestingModule } from '@nestjs/testing';
import { ClientFlagOnClientAndAgentController } from './client-flag-on-client-and-agent.controller';
import { ClientFlagOnClientAndAgentService } from './client-flag-on-client-and-agent.service';

describe('ClientFlagOnClientAndAgentController', () => {
  let controller: ClientFlagOnClientAndAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientFlagOnClientAndAgentController],
      providers: [ClientFlagOnClientAndAgentService],
    }).compile();

    controller = module.get<ClientFlagOnClientAndAgentController>(ClientFlagOnClientAndAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
