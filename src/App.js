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
        console.log(`${message.id} is being updated`);
        return updatedMessage;
      } else {
        // console.log(`${message.id} is not being updated`)
        return message;
      }
    });
    setMessageData(messages);
    // console.log(messages);
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


  const calcTotalLikes = chatMessages => {
    return chatMessages.reduce((total, message)=> {
      console.log(message.liked);
      return total + message.liked
    }, 0);
  };

  const totalLikeCount = calcTotalLikes(messageData);

  // beauty
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2>{totalLikeCount} ❤️s</h2>
        </section>
      </header>
      <main>
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
