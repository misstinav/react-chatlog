import React from 'react';
import './App.css';
import { useState } from 'react';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './components/TimeStamp.js';




const App = (props) => {
  const [chatData, setChatData] = useState(chatMessages);


  const toggleLike = () => {
    console.log(`Liked message`);
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry></ChatEntry> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog
        chatData={chatData}
        onToggleLike={toggleLike}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
