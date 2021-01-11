import { Body, Controller, Get, Post, Render, Request, Response } from '@nestjs/common';
import { AdminService } from '../../../service/admin/admin.service';
import { ToolsService } from '../../../service/tools/tools.service';



@Controller('admin/login')
export class LoginController {

    constructor(private toolsService: ToolsService, private adminService: AdminService) { };


    @Get()
    @Render('admin/login')
    async index() {
        console.log(await this.adminService.find())
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


    @Post("dologin")
    async doLogin(@Body() body, @Request() req, @Response() res) {
        // console.log(body);
        var code: String = body.code;
        var username: String = body.username;
        var password: String = body.password;
        // console.log(code);
        try {
            if (username == "" || password.length < 6) {
                console.log("用户名 或密码不合法")
            } else {
                if (code.toUpperCase() == req.session.code.toUpperCase()) {

                    var passwd = this.toolsService.getMd5(password);
                    var userinfo = await this.adminService.find({ "username": username, "password": passwd })
                    if (userinfo.length > 0) {
                        console.log('登录成功')
                        req.session.userinfo = userinfo[0];
                        res.redirect('admin/main')
                    }
                } else {
                    console.log("验证码不正确")
                }
            }
        } catch (error) {
            res.redirect('/admin/login')
        }
        // return "成功";
    }

}
