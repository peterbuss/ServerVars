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


    const url_params = {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify(conversationStr)
            };
    console.log('url_params', url_params);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: conversationStr
    });
    const data = await response.json();

/*
Challenge:
    1. Update the two commented lines of code to get this working.
    2. Push to GitHub to redeploy, then test.
*/
    conversationStr+=` ${data.reply.choices[0].text} ->`
    renderTypewriterText(data.reply.choices[0].text)

    console.log(data);

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