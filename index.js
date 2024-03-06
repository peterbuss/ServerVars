const chatbotConversation = document.getElementById('chatbot-conversation');
 
let conversationStr = '';
 
document.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input'); 
    conversationStr += `${userInput.value}`;
    console.log("Cs", conversationStr);
    fetchReply();
    const newSpeechBubble = document.createElement('div');
    newSpeechBubble.classList.add('speech', 'speech-human');
    chatbotConversation.appendChild(newSpeechBubble);
    newSpeechBubble.textContent = userInput.value;
    userInput.value = '';
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}) ;

async function fetchReply(){

    const url = 'https://servervars.netlify.app/.netlify/functions/fetchAI' ;

    console.log("-- call fetch");

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify(conversationStr)
        });
/* 
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
         */
        
        const data = await response.json();
    
        console.log("-- after fetch and .json()");
        console.log("data", data);

/*
Challenge:
    1. Update the two commented lines of code to get this working.
    2. Push to GitHub to redeploy, then test.
*/
        conversationStr+=` ${data.reply.choices[0].text} ->`;
        renderTypewriterText(data.reply.choices[0].text);

    } catch(error) {
        console.log("Error:", error.toString());
    }

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