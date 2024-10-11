import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  async testgpt() {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt =
      'Generate all FE content for Processing Engineering especially for FE exam';

    const result = await model.generateContent(prompt);

    let response = result.response.text().split('\n');

    const title = response[0];

    response = response.filter((content) => content !== '');
    return {
      title: title,
      response: response,
    };
  }
}
