import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  async testgpt() {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt =
      'Write 4 different projects for food and agriculture in software engineering';

    const result = await model.generateContent(prompt);

    return result.response.text();
  }
}
