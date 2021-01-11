import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //设置静态资源目录
  app.useStaticAssets(path.join(__dirname, "public"));

  //设置模板引擎
  app.setBaseViewsDir("views");
  app.setViewEngine("ejs");

  //设置cookie中间件
  app.use(cookieParser("this signed cookies"))

  //配置 session 的中间件 
  app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 30, httpOnly: true }, rolling: true }));

  await app.listen(3000);
}
bootstrap();
