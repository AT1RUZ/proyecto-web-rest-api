import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { SendService } from './send.service';
import { Response } from 'express';

@Controller('send')
export class SendController {
  constructor(private readonly sendService: SendService) {}

  @Post('email')
  async sendEmail(
    @Body() body: { to: string; subject: string; text?: string; html?: string },
    @Res() res: Response
  ) {
    try {
      const { to, subject, text, html } = body;
      const result = await this.sendService.sendMail(to, subject, text, html);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}
