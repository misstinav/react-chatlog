import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


// mapping because the original ChatEntry was hardcoded
const ChatLog = (props) => {
    // returning a map because  
    return props.entries.map((entry) => {
        // Test
        return (
            <ChatEntry
            // these are entries
            id={entry.id}
            body={entry.body}
            sender={entry.sender}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
        ></ChatEntry>
        );
    });   
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog