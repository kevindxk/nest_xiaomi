import { Controller, Get } from '@nestjs/common';

@Controller('index')
export class IndexController {

    @Get()
    index(){
        return "this is default"
    }
}
