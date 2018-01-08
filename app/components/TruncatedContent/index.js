import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TruncatedContent = ({ maxLength, text, content, linkTo }) => {
  const trancateContent = (content.length > maxLength)
    ? content.slice(0, maxLength)
    : content;

  return (
    <div className="truncated-content">
      {trancateContent}
      <span>...&nbsp;</span>
      {(content.length > maxLength) && getReadMoreButton(text, linkTo)}
    </div>
  );
};

const getReadMoreButton = (text, linkTo) => (
  <div>
    <Link to={linkTo}>{text}</Link>
  </div>
);

TruncatedContent.propTypes = {
  maxLength: PropTypes.number,
  text: PropTypes.string,
  content: PropTypes.string,
  linkTo: PropTypes.string,
};

export default TruncatedContent;
