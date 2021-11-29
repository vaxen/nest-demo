import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
  async findOne(id: number) {
    const contents = await readFile('messages.dummy.repo.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.dummy.repo.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(content: string) {
    const contents = await readFile('messages.dummy.repo.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    console.log(messages);

    await writeFile('messages.dummy.repo.json', JSON.stringify(messages));
  }

  async delete(id: number) {
    const contents = await readFile('messages.dummy.repo.json', 'utf8');
    const messages = JSON.parse(contents);

    delete messages[id];

    await writeFile('messages.dummy.repo.json', JSON.stringify(messages));
  }
}
