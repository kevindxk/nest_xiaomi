import { Controller,Get } from '@nestjs/common';

@Controller('api/user')
export class UserController {
    @Get()
    indx(){
        return "this is api login"
    }
}
