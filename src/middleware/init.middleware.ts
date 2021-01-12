import { Injectable, NestMiddleware } from '@nestjs/common';
import { from } from 'rxjs';
import { Config} from '../config/config';
import {Helper} from '../extend/helper'

@Injectable()
export class InitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    res.locals.config= Config;
    res.locals.helper= Helper;
    next();
  }
}
