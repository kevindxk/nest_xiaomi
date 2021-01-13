import { Mongoose } from "mongoose"
import { from } from "rxjs"
import * as mongoose from "mongoose";

const Schmea = mongoose.Schema;

export const RoleSchema = new Schmea({

    _id: String,
    title: String,
    description: String,
    status: Number

})

