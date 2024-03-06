// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {

    // davinci:ft-scrimba-2023-03-30-23-10-03
    // davinci-002
    
    const response = await openai.createCompletion({
      model: 'davinci:ft-scrimba-2023-03-30-23-10-03',
      prompt: event.body,
      presence_penalty: 0,
      frequency_penalty: 0.3,
      max_tokens: 100,
      temperature: 0,
      stop: ['\n', '->']
    });

    

/*
Challenge:
    1. Add a key value pair. The key should be 'reply' 
       and the value should be response.data.
    2. Paste the code into fetchAI.js in VS Code and push it 
       to GitHub to redeploy and see what gets logged out. 
*/


    //const subject = event.queryStringParameters.name || 'World';

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: response.data
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}

module.exports = { handler };
