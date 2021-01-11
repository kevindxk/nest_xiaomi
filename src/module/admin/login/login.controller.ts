import { Body, Controller, Get, Post, Render, Request } from '@nestjs/common';
import { AdminService } from '../../../service/admin/admin.service';

@Controller('admin/login')
export class LoginController {

    // constructor(private adminService:AdminService);


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
