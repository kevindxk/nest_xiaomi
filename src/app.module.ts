import { Module,NestModule,MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';
import { ApiModule } from './module/api/api.module';
import { MongooseModule } from '@nestjs/mongoose'
//配置中间件
import{AdminauthMiddleware}  from './middleware/adminauth.middleware'
import{InitMiddleware}  from './middleware/init.middleware'

//配置全局config
import {Config} from './config/config'
import { RoleService } from './service/role/role.service';


@Module({

  //配置数据库连接
  imports: [MongooseModule.forRoot('mongodb://192.168.1.27:27017/kdx', { useNewUrlParser: true }),
   AdminModule, DefaultModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule { }

//Nest中间件完全支持依赖注入。 就像提供者和控制器一样，它们能够注入属于同一模块的依赖项（通过 constructor ）。
//中间件不能在 @Module() 装饰器中列出。我们必须使用模块类的 configure() 方法来设置它们。包含中间件的模块必须实现 NestModule 接口。
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      //apply() 方法可以使用单个中间件，也可以使用多个参数来指定多个多个中间件。
      .apply(AdminauthMiddleware)
      //配置中间件时将包含路由路径的对象和请求方法传递给forRoutes()方法
      .forRoutes(`${Config.adminPath}/login`)
      //exclude() 方法轻松排除某些路线
      .apply(InitMiddleware)
      .forRoutes('*');
  }
}
