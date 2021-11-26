import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('messages');
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
