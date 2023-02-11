import { Controller, Get, Res } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Controller('qr')
export class QrcodeController {
  @Get()
  async generateQR(@Res() res) {
    const code = await qrcode.toDataURL('https://nestjs.com');
    res.type('png').send(new Buffer(code.split(',')[1], 'base64'));
  }
}