import { Body, Controller, Get, Post, Render, Request,Response } from '@nestjs/common';
import { get } from 'mongoose';
import { AdminService } from '../../../service/admin/admin.service';
import {ToolsService} from '../../../service/tools/tools.service'

@Controller('admin/login')
export class LoginController {

    constructor(private toolsService:ToolsService){};


    // @Get()
    // @Render('admin/login')
    // async index() {
    //     console.log(await this.adminService.find())
    //     return {};
    // }

    @Get()
    @Render('admin/login')
    index() {
        return {};
    }

    @Get('code')
    getCode(@Request() req,@Response() res){
        var svgCaptcha = this.toolsService.getCaptcha();

        //设置session
        req.session.code = svgCaptcha.text;
        res.type('image/svg+xml');
        res.send(svgCaptcha.data)

    }


    @Post("dologin")
    doLogin(@Body() body, @Request() req) {

        var code = body.code;
        var username = body.username;
        var password = body.password;

        if (username == "" || password.length < 6) {
            console.log("用户名 或密码不合法")
        }

    }

}
