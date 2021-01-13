import { Body, Controller, Get, Post, Render, Request, Response } from '@nestjs/common';
import { AdminService } from '../../../service/admin/admin.service';
import { ToolsService } from '../../../service/tools/tools.service';

import {Config} from '../../../config/config'



@Controller(`${Config.adminPath}/login`)
export class LoginController {

    constructor(private toolsService: ToolsService, private adminService: AdminService) { };


    // @Get('admin/register')
    // async register(){
    //     return "this is register"
    // }



    @Get()
    @Render(`${Config.adminPath}/login`)
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
        // console.log(req.session.code)
        try {
            if (username == "" || password.length < 6) {

                this.toolsService.error(res,"用户名 或密码不合法",`${Config.adminPath}/login`)
                // console.log("用户名 或密码不合法")
            } else {
                if (code.toUpperCase() == req.session.code.toUpperCase()) {

                    var passwd = this.toolsService.getMd5(password);
                    var userinfo = await this.adminService.find({ "username": username, "password": passwd })
                    if (userinfo.length > 0) {
                        // console.log('登录成功')
                        req.session.userinfo = userinfo[0];
                        this.toolsService.success(res,`${Config.adminPath}/mian`)
                        // res.redirect('admin/main')
                    }
                } else {

                    this.toolsService.error(res,"验证码不正确",`${Config.adminPath}/login`)
                    console.log("验证码不正确")
                }
            }
        } catch (error) {
            res.redirect(`${Config.adminPath}/login`)
        }
        // return "成功";
    }

    @Get('loginOut')
    loginOut(@Request() req,@Response() res){
        req.session.userinfo = null;
        res.redirect(`${Config.adminPath}/login`)
    }

}
