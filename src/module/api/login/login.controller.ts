import { Controller, Get } from '@nestjs/common';

@Controller('api/login')
export class LoginController {
    @Get("user")
    indx(){
        return "this is api login"
    }
}
