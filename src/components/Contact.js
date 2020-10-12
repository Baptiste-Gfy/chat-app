import React from 'react';
import './Contact.css'

function Contact() {
  const name = "Martin Dean"
  const avatar = "https://randomuser.me/api/portraits/men/9.jpg"
  const status = true
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div>
        <h4 className="name">{name}</h4>
          <div className="status">
            <span className={status ? "status-online" : "status-offline"}></span>
            <span className="status-text">{status ? "online" : "offline"}</span>
          </div>
      </div>
    </div>
  );
}

export default Contact; 