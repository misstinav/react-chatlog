import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  // lifting state..single source -useState
  // brains
  // console.log(chatMessages);
  // const []
  // const likeMessage = () => {

  // }


  const calcTotalLikes = chatMessages => {
    return chatMessages.reduce((total, message)=> {
      return total + message.liked
    }, 0);
  };

  const totalLikeCount = calcTotalLikes(chatMessages);

  // beauty
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <h2>{totalLikeCount} ❤️'s</h2>
        {/*Wave 02: Render ChatLog component */}
        {/* components are the tags and props are the attributes */}
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
