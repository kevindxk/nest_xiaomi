import { Controller, Get } from '@nestjs/common';

@Controller('default/index')
export class IndexController {

    @Get("user")
    index(){
        return "this is default"
    }
}
