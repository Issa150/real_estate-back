import { PartialType } from '@nestjs/mapped-types';
import { CreateSavedPropertyDto } from './create-saved-property.dto';

export class UpdateSavedPropertyDto extends PartialType(CreateSavedPropertyDto) {}
