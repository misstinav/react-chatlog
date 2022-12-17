import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chats = props.chatData.map((chat, i) => {
    return <ChatEntry
    key={i}
    sender={chat.sender}
    body={chat.body}
    timeStamp={chat.timeStamp}
    liked={chat.liked}
    />;
  });

  return (
    <section>
      {/* <h2>A list of messages go here. I am in chatlog</h2> */}
      {/* <ChatEntry></ChatEntry>
      <ChatEntry></ChatEntry>
      <ChatEntry></ChatEntry>
      <ChatEntry></ChatEntry> */}
      {chats}


    </section>
  )
};

ChatLog.protoTypes = {
  
}

export default ChatLog;