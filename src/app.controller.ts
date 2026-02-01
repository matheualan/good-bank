import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {

  constructor() { }

  @Get()
  @ApiExcludeEndpoint()
  async redirect(@Res() response: any) {
    return response.redirect('/swagger');
  }

}