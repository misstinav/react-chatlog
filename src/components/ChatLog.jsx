import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chats = props.chatData.map(chat => {
    return <ChatEntry
    key={chat.id}
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

ChatLog.propTypes = {
    //Fill with correct proptypes
  chatData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    liked: PropTypes.bool,
  })),
  likeMessageProp: PropTypes.func
}

export default ChatLog;