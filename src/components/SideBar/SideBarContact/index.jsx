import React, { useState } from "react";
import UserIcon from "../../UserIcon";
import "./SideBarContact.css";
import { useAppContext } from "../../../base/context";

const SidebarContact = ({ name, message, timeStamp }) => {
  const [activeUser, setActiveUser] = useState(false);
  const activeUserHandler = () => {
    setActiveUser(true);
  };
  const [{ user, senderUser }, dispatch] = useAppContext();

  const active = activeUser ? "container" + " active" : "container";
  return (
    <div className={active} onClick={activeUserHandler}>
      <div className="inner__container">
        <div className="inner__user__icon">
          <UserIcon src={user.profile_pic} online={user.available} />
        </div>
        <div className="user__details">
          {name}
          <p>{message.substring(0, 20) + " ..."}</p>
        </div>
        <div className="time_stamp">{timeStamp}</div>
      </div>
    </div>
  );
};

export default SidebarContact;
