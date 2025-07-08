import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AgentController],
  providers: [AgentService,UserService],
})
export class AgentModule {}
