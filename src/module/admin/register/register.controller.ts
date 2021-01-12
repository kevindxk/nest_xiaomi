import { Body, Controller, Get, Post, Render, Request, Response } from '@nestjs/common';
import { ToolsService } from '../../../service/tools/tools.service'
import { AdminService } from '../../../service/admin/admin.service'

@Controller('admin/register')
export class RegisterController {

    constructor(private toolsService: ToolsService, private adminService: AdminService) { }

    @Get()
    @Render('admin/register')
    adminRegister() {
        return {};
    }

    @Get('code')
    getCode(@Request() req, @Response() res) {
        var svgCaptcha = this.toolsService.getCaptcha();

        //设置session
        req.session.code = svgCaptcha.text;
        res.type('image/svg+xml');
        res.send(svgCaptcha.data)

    }


    @Post('regis')
    getRegis(@Body() body, @Request() req, @Response() res) {

        console.log(body);
        var code: String = body.code;
        var username = body.username;
        var password = body.password;
        var phone = body.phone;
        var email = body.email;

        var getcode = req.session.code;
        console.log(getcode);

        if (getcode.toUpperCase() == code.toUpperCase()) {
            console.log("123")
            if (username != "" && password != "" && phone != "" && email != "") {
                console.log("注册成功")
                // var pass  = this.toolsService.getMd5(password);
                // var getUser = this.adminService.insert({
                //     "username":username,
                //     "password":pass,
                //     "phone":phone,
                //     "email":email,
                // })
                return "注册成功"
            }
        } else {
            console.log("验证码输入错误")
        }



    }
}
