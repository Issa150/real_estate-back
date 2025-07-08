import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  /*
  - get all agnet related to its agency
  - get all clients not deleted related to its agency 
  - get all clients deleted related to its agency
  - get all properties related to its agency
  - get all requests related to its agency
  - 

  - Crud for user, client, agent, property, request, notes
  */
}
