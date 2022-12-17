import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';


const App = () => {
  // lifting state..single source -useState
  // brains
  console.log(chatMessages);
  // const [chatData, setChatData] = useState(chatMessages)


  // beauty
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        {/* lines 24-26 in Apps become the props */}
      <ChatEntry 
        sender ={chatMessages[0].sender}
        body ={chatMessages[0].body}
        timestamp ={chatMessages[0].timeStamp} 
      ></ChatEntry>    
        
        
        {/*Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
