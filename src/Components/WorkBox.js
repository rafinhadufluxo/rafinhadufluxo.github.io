import React from 'react';

const WorkBox = ({ icon, title, description }) => {
  return (
    <div className="workbox">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkBox;
