import { Controller, Get, Res, Response } from '@nestjs/common';
import { ApiProduces, ApiTags } from '@nestjs/swagger';
import * as qrcode from 'qrcode';
import { Response as Responses } from 'express';

@Controller('qr')
@ApiTags('QR-Code')
export class QrcodeController {
  @Get()
  @ApiProduces('image/png')
  async generateQR(@Response() res: Responses) {
    const code = await qrcode.toDataURL('http://localhost:3000/movies');
    return res.type('png').send(Buffer.from(code.split(',')[1], 'base64'));
  }
}
