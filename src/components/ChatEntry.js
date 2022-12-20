// import React from 'react';
import './ChatEntry.css';
// import { useState } from 'react';

import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// Toggle should be moved to app
const ChatEntry = (props) => {

  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timestamp: props.timestamp,
      liked: !props.liked
    };
    props.onUpdate(updatedMessage);
  };
  // const [toggleLike, setToggleLike] = useState(false);
  // console.log(props.onUpdate());
  // const toggle = () => {
  //   setToggleLike(!toggleLike);

  // };
  // console.log();
  
  
  
  
  const likeColor = props.liked ? '❤️':'🤍'; 
  
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
        <button className="like" onClick={onLikeButtonClick}>{likeColor}</button>
        {/* <button className="like" onClick={toggle}>{likeColor}</button> */}

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
  onUpdate: PropTypes.func
};

export default ChatEntry;
