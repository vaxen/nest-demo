import { MessagesController } from './controllers/messages.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [MessagesController],
  providers: [],
})
export class MessagesModule {}
