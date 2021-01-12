import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AdminauthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    // console.log('中间件');

    // console.log(req.baseUrl);

    var pathname = req.baseUrl;
    //1.获取session里保存的用户信息
    var userinfo = req.session.userinfo;
    if(userinfo && userinfo.username) {
     
       //设置全局变量
       res.locals.userinfo = userinfo;
       next();
    } else {
      //排除不需要做权限验证的页面
      if (pathname == "/admin/login" || pathname == "/admin/login/code" || pathname == "/admin/login/dologin") {
       
        next();
      } else {
        res.redirect('/admin/login')
      }

    }
    // next();
  }
}
