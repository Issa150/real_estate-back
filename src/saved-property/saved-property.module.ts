import { Module } from '@nestjs/common';
import { SavedPropertyService } from './saved-property.service';
import { SavedPropertyController } from './saved-property.controller';

@Module({
  controllers: [SavedPropertyController],
  providers: [SavedPropertyService],
})
export class SavedPropertyModule {}
