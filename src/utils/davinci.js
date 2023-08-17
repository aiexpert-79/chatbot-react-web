import { Configuration, OpenAIApi } from 'openai';

export const davinci = async (prompt, key) => {
  const configuration = new Configuration({
    apiKey: key,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          "you're an a AI assistant that replies to all my questions in markdown format.",
      },
      { role: 'user', content: 'hi' },
      { role: 'assistant', content: 'Hi! How can I help you?' },
      { role: 'user', content: `${prompt}?` },
    ],
    temperature: 0.1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream:true
  }, { responseType: "stream"});

  return response;
};