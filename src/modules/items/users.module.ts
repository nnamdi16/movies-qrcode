import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { Userchema } from './schema/user.shema';

@Module({
  imports: [MongooseModule.forFeature([{name:"User", schema: Userchema}])],
  controllers: [ UserController],
  providers: [ UserService],
})
export class UserModule {}