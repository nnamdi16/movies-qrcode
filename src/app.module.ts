import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './items/users.controller';
import { UserService } from './items/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './items/users.module';
import { QrcodeService } from './qrcode/qrcode.service';
import { QrcodeController } from './qrcode/qrcode.controller';
import { QrModule } from './qrcode/qr.module';
import { DatabaseModule } from 'database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi'


@Module({
  imports: [ QrModule,ConfigModule.forRoot({
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),
      
    }),
  }),DatabaseModule ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
