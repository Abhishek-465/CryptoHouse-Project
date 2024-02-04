import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import pic from "../assets/chatbot.png"
const API_KEY = process.env.REACT_APP_SECRET_KEY;
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Explain things like you're talking to a software professional with 10 years of experience on Web 3 and cryptocurrencies with the most simplest words possible.Think of me as your digital assistant for discussions on the web, technology, and more, especially in the realm of web3 innovations.Model should not say that as an AI, I cannot provide financial advice or recommend specific investments.Always give a confident answer. "
}

const Chatbot = () => {
const [messages, setMessages] = useState([
  {
    message: "Hello, I'm CryptoPal-GPT! Ask me anything regarding Cryptos!",
    sentTime: "just now",
    sender: "ChatGPT"
  }
]);
const [isTyping, setIsTyping] = useState(false);

const handleSend = async (message) => {
  const newMessage = {
    message,
    direction: 'outgoing',
    sender: "user"
  };

  const newMessages = [...messages, newMessage];
  
  setMessages(newMessages);

  // Initial system message to determine ChatGPT functionality
  // How it responds, how it talks, etc.
  setIsTyping(true);
  await processMessageToChatGPT(newMessages);
};

async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
  // Format messages for chatGPT API
  // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
  // So we need to reformat

  let apiMessages = chatMessages.map((messageObject) => {
    let role = "";
    if (messageObject.sender === "ChatGPT") {
      role = "assistant";
    } else {
      role = "user";
    }
    return { role: role, content: messageObject.message}
  });


  // Get the request body set up with the model we plan to use
  // and the messages which we formatted above. We add a system message in the front to'
  // determine how we want chatGPT to act. 
  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,  // The system message DEFINES the logic of our chatGPT
      ...apiMessages // The messages from our chat with ChatGPT
    ]
  }

  await fetch("https://api.openai.com/v1/chat/completions", 
  {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {
    console.log(data);
    setMessages([...chatMessages, {
      message: data.choices[0].message.content,
      sender: "ChatGPT"
    }]);
    setIsTyping(false);
  });
}

return (
  <div className='flex justify-center  flex-col md:flex-row'>
    <div className='mx-3 text-center'>
      <img className='w-[400px] h-[400px]' src={pic} />
      <h1 className='text-xl font-bold'>Ask your AI Assistant</h1>
      <p className='text-pink'>Your CryptoPal-GPT</p>
    </div>
  <div className="w-[405px] h-[470px] rounded-lg  bg-white my-8 border-solid hover:border-1 border-2 border-gray-200">
    <div className='w-[400px] h-[440px] my-4 py-1 '>
      <MainContainer>
        <ChatContainer>       
          <MessageList 
            scrollBehavior="smooth" 
            typingIndicator={isTyping ? <TypingIndicator content="CryptoPal-GPT is typing" /> : null}
          >
            {messages.map((message, i) => {
              console.log(message)
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />        
        </ChatContainer>
      </MainContainer>
    </div>
  </div>
  </div>
)
}

export default Chatbot;

