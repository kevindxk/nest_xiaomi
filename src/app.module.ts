import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';
import { ApiModule } from './module/api/api.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({

  //配置数据库连接
  imports: [MongooseModule.forRoot('mongodb://192.168.1.27:27017/kdx', { useNewUrlParser: true }),
   AdminModule, DefaultModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
