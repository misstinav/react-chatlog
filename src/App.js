import React from 'react';
import './App.css';
import ChatEntry from './ChatEntry.js';
// import chatMessages from './data/messages.json';
import ChatLog from './ChatLog.jsx';
// import './src/components/TimeStamp.js';


const App = () => {
  // const chatData = [
  //   {
  //     id: 1,
  //     sender:'Vladimir',
  //     body:'why are you arguing with me',
  //     timeStamp:'2018-05-29T22:49:06+00:00',
  //     liked: false
  //   }
  // ]

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog>
          <ChatEntry>Stuff</ChatEntry>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
