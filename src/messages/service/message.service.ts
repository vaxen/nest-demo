/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository/message.repository';

@Injectable()
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  findOne(id: number) {
    return this.messageRepository.findOne(id);
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  create(content: string) {
    return this.messageRepository.create(content);
  }

  delete(id: number) {
    return this.messageRepository.delete(id);
  }
}
