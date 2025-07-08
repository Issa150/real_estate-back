import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [ClientController],
  providers: [ClientService, UserService],
})
export class ClientModule {}
