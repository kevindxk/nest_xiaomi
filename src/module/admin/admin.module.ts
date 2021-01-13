import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { LoginController } from './login/login.controller';
import { ManagerController } from './manager/manager.controller';
import { ToolsService } from '../.././service/tools/tools.service';

import {MongooseModule} from '@nestjs/mongoose';
import {AdminSchema} from '../../schema/admin.schema';
import { AdminService } from '../../service/admin/admin.service';
import { RegisterController } from './register/register.controller';
import {RoleSchema} from '../../schema/role.schema';
import { RoleService } from '../../service/role/role.service';
import { RoleController } from './role/role.controller';


@Module({
  imports:[
    MongooseModule.forFeature([{name:'admin',schema:AdminSchema,collection:"admin"},
    {name:'Role',schema:RoleSchema,collection:"role"}
  ])
  ],
  controllers: [MainController, LoginController, ManagerController, RegisterController, RoleController],
  providers:[ToolsService,AdminService,RoleService]
})
export class AdminModule {}
