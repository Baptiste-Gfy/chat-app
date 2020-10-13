import React from 'react';
import './Contact.css'

function Contact(props) {

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} />
      <div>
        <h4 className="name">{props.name}</h4>
          <div className="status">
            <span className={props.status ? "status-online" : "status-offline"}></span>
            <span className="status-text">{props.status ? "online" : "offline"}</span>
          </div>
      </div>
    </div>
  );
}

export default Contact; 