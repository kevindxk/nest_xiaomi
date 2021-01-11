import { Injectable } from '@nestjs/common';

//引入模块
import * as svgCaptcha from 'svg-captcha';

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

}
