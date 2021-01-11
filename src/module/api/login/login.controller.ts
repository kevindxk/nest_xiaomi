import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    indx(){
        return "this is api login"
    }
}
