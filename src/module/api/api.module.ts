import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [LoginController, UserController]
})
export class ApiModule {}
