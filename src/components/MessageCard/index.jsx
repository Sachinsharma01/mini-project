import React from "react";
import "./MessageCard.css";

const MessageCard = ({ children, me, sender }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className={sender ? "message__sender" : "message__me"}>
        {children}
      </div>
    </div>
  );
};

export default MessageCard;
