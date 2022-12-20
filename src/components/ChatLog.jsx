import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.chatData.map(chat => {
    return <ChatEntry
    key={chat.id}
    sender={chat.sender}
    body={chat.body}
    timeStamp={chat.timeStamp}
    liked={chat.liked}
    onUpdate= {props.onUpdateMessage}
    />;
  });
  console.log(props.onUpdateMessage);

  return (
    <section>
      {chatEntryComponents}
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
  onUpdateMessage: PropTypes.func
}

export default ChatLog;