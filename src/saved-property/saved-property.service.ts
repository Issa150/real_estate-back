import { Injectable } from '@nestjs/common';
import { CreateSavedPropertyDto } from './dto/create-saved-property.dto';
import { UpdateSavedPropertyDto } from './dto/update-saved-property.dto';

@Injectable()
export class SavedPropertyService {
  create(createSavedPropertyDto: CreateSavedPropertyDto) {
    return 'This action adds a new savedProperty';
  }

  findAll() {
    return `This action returns all savedProperty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} savedProperty`;
  }

  update(id: number, updateSavedPropertyDto: UpdateSavedPropertyDto) {
    return `This action updates a #${id} savedProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedProperty`;
  }
}
