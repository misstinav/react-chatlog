import React from 'react';
import './ChatEntry.css';
import { useState } from 'react';

import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// Toggle should be moved to app
const ChatEntry = (props) => {
  let likeCount = 0;
  const [toggleLike, setToggleLike] = useState(false);

  const toggle = () => {
    setToggleLike(!toggleLike);
    console.log(toggleLike, likeCount);

    // if (toggleLike === 'true') {
    //   return likeCount += 1;
    // } 
  };

  const likeColor = toggleLike ? '❤️':'🤍'; 
  
  // props.key => value
  // taking these props from App
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
          </p>
        <button className="like" onClick={toggle}>{likeColor}</button>
      </section>
    </div>
  );
};



ChatEntry.propTypes = {
    //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
