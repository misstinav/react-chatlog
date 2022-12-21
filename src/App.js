import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const updateMessageData = updatedMessage => {
    const messages = messageData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  // const likeMessage = (id) => {
  //   // console.log(`Liking message ${chatMessages.id}`);
  //   const newChatMessage = messageData.map(message => {
  //     if (message.id === id) {
  //       return {...message, likeCount: message.likeCount + 1};
  //     } else {
  //       return message;
  //     }
  //   });
  //   setMessageData(newChatMessage);
  // }


  // const calcTotalLikes = chatMessages => {
  //   return chatMessages.reduce((total, message)=> {
  //     return total + message.liked
  //   }, 0);
  // };

  // const totalLikeCount = calcTotalLikes(chatMessages);

  // beauty
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <h2>total Like Count ❤️'s</h2>
        {/*Wave 02: Render ChatLog component */}
        {/* components are the tags and props are the attributes */}
        <ChatLog
        entries={messageData}
        onUpdateMessage={updateMessageData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
