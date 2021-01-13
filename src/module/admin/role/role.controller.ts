import { Controller, Get, Render } from '@nestjs/common';
import {Config} from '../../../config/config'

import { RoleService } from '../../../service/role/role.service';

@Controller(`${Config.adminPath}/role`)
export class RoleController {

    constructor(private roleService:RoleService){}


    @Get()
    @Render('admin/role/index')
    async index(){
        var result = await this.roleService.find({})

        return {
            roleList:result
        };
    }
    
}
