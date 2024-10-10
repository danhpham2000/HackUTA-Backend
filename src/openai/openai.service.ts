import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async testGPT() {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:
            'Write 4 different projects that related to food and agriculture in software engineering',
        },
      ],
    });

    return completion.choices;
  }
}
