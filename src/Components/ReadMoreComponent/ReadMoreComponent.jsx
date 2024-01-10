import React, { useState } from 'react';
import './ReadMoreComponent.css';

const ReadMoreComponent = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <span className="content">{showFullText ? text : `${text.slice(0, 50)}...`}</span>
      {text.length > 50 && (
        <span className="readmore" onClick={toggleText}>
          &nbsp; {showFullText ? 'Read less' : 'Read more'}
        </span>
      )}
    </div>
  );
};

export default ReadMoreComponent;