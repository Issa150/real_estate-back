import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientFlagOnClientAndAgentService } from './client-flag-on-client-and-agent.service';
import { CreateClientFlagOnClientAndAgentDto } from './dto/create-client-flag-on-client-and-agent.dto';
import { UpdateClientFlagOnClientAndAgentDto } from './dto/update-client-flag-on-client-and-agent.dto';

@Controller('client-flag-on-client-and-agent')
export class ClientFlagOnClientAndAgentController {
  constructor(private readonly clientFlagOnClientAndAgentService: ClientFlagOnClientAndAgentService) {}

  @Post()
  create(@Body() createClientFlagOnClientAndAgentDto: CreateClientFlagOnClientAndAgentDto) {
    return this.clientFlagOnClientAndAgentService.create(createClientFlagOnClientAndAgentDto);
  }

  @Get()
  findAll() {
    return this.clientFlagOnClientAndAgentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientFlagOnClientAndAgentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientFlagOnClientAndAgentDto: UpdateClientFlagOnClientAndAgentDto) {
    return this.clientFlagOnClientAndAgentService.update(+id, updateClientFlagOnClientAndAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientFlagOnClientAndAgentService.remove(+id);
  }
}
