import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {AdminInterface} from '../../interface/admin.interface';

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
