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
  providers: [AppService, RoleService],
})
// export class AppModule { }

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AdminauthMiddleware)
      .forRoutes(`${Config.adminPath}/login`)
      .apply(InitMiddleware)
      .forRoutes('*');
  }
}
