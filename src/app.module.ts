import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { OwnerModule } from './owner/owner.module';
import { AgentModule } from './agent/agent.module';
import { ManagerModule } from './manager/manager.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AgencyModule } from './agency/agency.module';
import { PropertyModule } from './property/property.module';
import { PropertyImageModule } from './property-image/property-image.module';
import { RequestModule } from './request/request.module';
import { SavedPropertyModule } from './saved-property/saved-property.module';
import { ClientNoteModule } from './client-note/client-note.module';
import { ClientFlagOnClientAndAgentModule } from './client-flag-on-client-and-agent/client-flag-on-client-and-agent.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule ,UserModule, ClientModule, OwnerModule, AgentModule, ManagerModule, SuperAdminModule, AgencyModule, PropertyModule, PropertyImageModule, RequestModule, SavedPropertyModule, ClientNoteModule, ClientFlagOnClientAndAgentModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
