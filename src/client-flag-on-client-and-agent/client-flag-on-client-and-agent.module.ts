import { Module } from '@nestjs/common';
import { ClientFlagOnClientAndAgentService } from './client-flag-on-client-and-agent.service';
import { ClientFlagOnClientAndAgentController } from './client-flag-on-client-and-agent.controller';

@Module({
  controllers: [ClientFlagOnClientAndAgentController],
  providers: [ClientFlagOnClientAndAgentService],
})
export class ClientFlagOnClientAndAgentModule {}
