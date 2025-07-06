import { PartialType } from '@nestjs/mapped-types';
import { CreateClientFlagOnClientAndAgentDto } from './create-client-flag-on-client-and-agent.dto';

export class UpdateClientFlagOnClientAndAgentDto extends PartialType(CreateClientFlagOnClientAndAgentDto) {}
