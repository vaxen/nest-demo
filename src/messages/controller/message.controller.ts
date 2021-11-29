import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from '../dto/create-message-request.dto';
import { MessageService } from '../service/message.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessageService) {}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: number) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    } else {
      return message;
    }
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: number) {
    this.messageService.delete(id);
  }
}
