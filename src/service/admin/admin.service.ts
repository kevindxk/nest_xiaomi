import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class AdminService {
    constructor(@InjectModel('admin') private readonly adminModel){}

    async find(){
        return await this.adminModel.find()
    }

}
