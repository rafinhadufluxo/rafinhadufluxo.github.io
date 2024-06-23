import React from 'react';

const SocialLink = ({ href, iconClass, color }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color }}>
      <i className={iconClass}></i>
    </a>
  );
};

export default SocialLink;
