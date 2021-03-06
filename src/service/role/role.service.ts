import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';

import {RoleInterface} from '../../interface/role.interface'

@Injectable()
export class RoleService {

    constructor(@InjectModel('Role') private roleModel){}

    async find(json:RoleInterface,fields?:String){
        try {
             return await this.roleModel.find(json,fields);
        } catch (error) {
            return [];
        }
       
    }


    async add(json:RoleInterface,fields?:String){
        try {
            var role = new this.roleModel(json);
            var result = role.save();
            return result;
        } catch (error) {
            return [];
        }
       
    }


    async update(json:RoleInterface,json2:RoleInterface){
        try {
            var result = new this.roleModel.updateOne(json,json2);
            // var result = role.save();
            return result;
        } catch (error) {
            return [];
        }
       
    }


    async del(json:RoleInterface){
        try {
            var result = new this.roleModel.deleteOne(json);
            // var result = role.save();
            return result;
        } catch (error) {
            return [];
        }
       
    }


}
