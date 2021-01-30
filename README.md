<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# neststudy
nest学习
- 安装nest脚手架 npm install -g @nestjs/cli
- 创建项目 nest new nestdemo
- 运行项目 yarn run start/npm run start:dev
- 127.0.0.1:3000

## nest模块
### Controller

### Providers

### Module

### Middleware

### Filter

### Pipe

### Guard


### IntercePtor


### 工作原理
- 1.定义一个服务，然后通过@Injectable()装饰器装饰
```code 
  import { Injectable } from '@nestjs/common';
  import { AdminInterface } from './interfaces/admin.interface';

@Injectable()
export class AdminService {
    constructor(@InjectModel('admin') private readonly adminModel){}

    async find(json={}){
        return await this.adminModel.find(json)
    }

    async add (json:AdminInterface){

        var aduser  = new this.adminModel(json)
        var result = aduser.save();
        return result;
    }

    async insert(json={}){
        return await this.adminModel.insert(json)
    }
}
```
- 2.把提供的服务注入到控制器类中
```
  @Controller(`${Config.adminPath}/login`)
  export class LoginController {

    constructor(private toolsService: ToolsService, private adminService: AdminService) { };


    @Get()
    @Render(`${Config.adminPath}/login`)
    async index() {
       console.log(await this.adminService.find())

        
        // return "这是login";
        return {};
    }
```
- 3.把 Nest IoC 容器中注册提供程序
```
  @Module({
  imports:[
    MongooseModule.forFeature([{name:'admin',schema:AdminSchema,collection:"admin"},
    {name:'Role',schema:RoleSchema,collection:"role"}
  ])
  ],
  controllers: [MainController, LoginController, ManagerController, RegisterController, RoleController],
  providers:[ToolsService,AdminService,RoleService]
  })
```
