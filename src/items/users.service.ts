import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly UserModel:Model<User>){}
    
   
   async findAll(): Promise<User[]>{
        return await this.UserModel.find();
    }
   async findOne(id:string): Promise<User>{
        return this.UserModel.findOne({_id:id});
    }
    async create(User: User): Promise<User>{
        const newUser =new this.UserModel(User);
        return await newUser.save();
    }
    async update(id:string, User: User): Promise<User>{
        return await this.UserModel.findByIdAndUpdate(id,User, {new: true});
    }

    async delete(id:string): Promise<User> {
        return await this.UserModel.findByIdAndDelete(id);

    }

}
