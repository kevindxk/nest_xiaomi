import * as mongoose from "mongoose";

const Schmea = mongoose.Schema;

var d = new Date();

export const RoleSchema = new Schmea({

    title:{type:String} ,
    description: {type:String},
    status: {
        type:Number,
        default:1
    },
    add_time:{
        type:Number,
        default:d.getTime()
    }

})

