import * as mongoose from "mongoose";
export const Userchema = new mongoose.Schema({
    name:String,
    email: String,
    phoneNumber: Number,
});
