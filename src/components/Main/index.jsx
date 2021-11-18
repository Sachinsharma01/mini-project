import React from "react";
import "./Main.css";

const Main = (props) => {
  console.log(props.messages);
  return (
    <div className="main">
      {/* {props.messages.map((message) => (
        <MessageCard key={message} sender={true}>
          {message}
        </MessageCard>
      ))} */}
    </div>
  );
};

export default Main;
