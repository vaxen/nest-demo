import { MessagesController } from './controller/message.controller';
import { Module } from '@nestjs/common';
import { json } from 'stream/consumers';
import { MessageService } from './service/message.service';
import { MessageRepository } from './repository/message.repository';
@Module({
  imports: [],

  controllers: [MessagesController],
  providers: [MessageService, MessageRepository],
})
export class MessagesModule {}
