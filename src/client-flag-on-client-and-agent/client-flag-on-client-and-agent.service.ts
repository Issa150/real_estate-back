import { Injectable } from '@nestjs/common';
import { CreateClientFlagOnClientAndAgentDto } from './dto/create-client-flag-on-client-and-agent.dto';
import { UpdateClientFlagOnClientAndAgentDto } from './dto/update-client-flag-on-client-and-agent.dto';

@Injectable()
export class ClientFlagOnClientAndAgentService {
  create(createClientFlagOnClientAndAgentDto: CreateClientFlagOnClientAndAgentDto) {
    return 'This action adds a new clientFlagOnClientAndAgent';
  }

  findAll() {
    return `This action returns all clientFlagOnClientAndAgent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientFlagOnClientAndAgent`;
  }

  update(id: number, updateClientFlagOnClientAndAgentDto: UpdateClientFlagOnClientAndAgentDto) {
    return `This action updates a #${id} clientFlagOnClientAndAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientFlagOnClientAndAgent`;
  }
}
