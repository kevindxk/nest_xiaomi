import { Injectable } from '@nestjs/common';

//引入模块
import * as svgCaptcha from 'svg-captcha';

// var md5 = require("md5");
import * as md5 from 'md5';

@Injectable()
export class ToolsService {

    getCaptcha() {
        var captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 32,
            background: "#cc9966"
        });
        return captcha;
    }


    getMd5(str:String){
        return md5(str);
    };

    async success(res,redirectUrl){
        await res.render('admin/public/success',{
            redirectUrl:redirectUrl
        })

    }

    async error(res,message,redirectUrl){
        await res.render('admin/public/err',{
            message:message,
            redirectUrl:redirectUrl
        })
    }
}
