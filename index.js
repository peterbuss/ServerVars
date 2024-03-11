const chatbotConversation = document.getElementById('chatbot-conversation');
 
let conversationStr = '';
 
document.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input') ;
    // conversationStr += ` ${userInput.value} ->`; old
    conversationStr += `${userInput.value} `;

    console.log(conversationStr)
    // fetchReply(); old
    // fetchReply(conversationStr); <-- I recommend passing in the string as a parameter to the function for readibility
    test(conversationStr)

    // commented these lines for testing purposes

    // const newSpeechBubble = document.createElement('div');
    // newSpeechBubble.classList.add('speech', 'speech-human');
    // chatbotConversation.appendChild(newSpeechBubble);
    // newSpeechBubble.textContent = userInput.value;
    // userInput.value = '';
    // chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}) ;

// const url = 'https://main--servervars.netlify.app/.netlify/functions/fetchAI';
async function fetchReply(input){

    const url = '/.netlify/functions/fetchAI';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            // 'content-type': 'text/plain', old
            'content-type': 'application/json',
        },
        // body: conversationStr old
        body: JSON.stringify({input})
    });
    const data = await response.json();
    console.log(data);

    
    /* conversationStr += ` ${response.data.choices[0].text} \n`;
    renderTypewriterText(response.data.choices[0].text);
    console.log(conversationStr); */
}

function renderTypewriterText(text) {
    const newSpeechBubble = document.createElement('div');
    newSpeechBubble.classList.add('speech', 'speech-ai', 'blinking-cursor');
    chatbotConversation.appendChild(newSpeechBubble);
    let i = 0;
    const interval = setInterval(() => {
        newSpeechBubble.textContent += text.slice(i-1, i);
        if (text.length === i) {
            clearInterval(interval);
            newSpeechBubble.classList.remove('blinking-cursor');
        }
        i++;
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
    }, 50);
}


/**

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: insert API key for testing or use back end ,
  dangerouslyAllowBrowser: true
});

const openai = new OpenAIApi(configuration);

// this function mimics fetchReply

async function test(input){
    const response = await openai.createCompletion({
        // model: 'davinci:ft-scrimba-2023-03-30-23-10-03', old
        model: 'davinci-002',
        // prompt: event.body, old
        prompt: input,
        presence_penalty: 0,
        frequency_penalty: 0.3,
        max_tokens: 100,
        temperature: 0,
        stop: ['\n', '->']
      }); 
  
      console.log(response)
}

**/