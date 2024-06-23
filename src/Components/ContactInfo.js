import React from 'react';

const ContactInfo = ({ iconClass, color, label, value }) => {
  return (
    <div className="row">
      <div className="icon">
        <i className={iconClass} style={{ color: color }}></i>
      </div>
      <div className="content">
        <span>{label}</span>
        <h5>{value}</h5>
      </div>
    </div>
  );
};

export default ContactInfo;
