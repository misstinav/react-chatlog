import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">Sender Name</h2>
      {/* <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">props.TimeStamp(props.time)</p>
        <button className="like">🤍</button>
      </section> */}
    </div>
  );
};

// ChatEntry.propTypes = {
//     //Fill with correct proptypes
//   sender: PropTypes.string,
//   body: PropTypes.string,
//   time: PropTypes.func,
//   like: PropTypes.bool,
// };

export default ChatEntry;
