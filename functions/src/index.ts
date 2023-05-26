import { onRequest } from 'firebase-functions/v2/https';
import { Configuration, OpenAIApi } from 'openai';
import { getImagePrompt } from './image-prompt';

const configuration = new Configuration({
  organization: process.env.ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export const generateImage = onRequest(async (request, response) => {
  try {
    const { query } = request.body.data;
    const { data: responseData } = await openai.createImage({
      prompt: getImagePrompt(query),
      n: 2,
      size: '1024x1024',
    });

    console.log('responseData => ', responseData);
    response
      .status(200)
      .json({
        data: responseData.data,
      });
  } catch (e: any) {
    const { code = undefined, message = undefined } = e.response.data.error;

    response
      .status(500)
      .json({
        data: { code, message },
      });
  }
});
