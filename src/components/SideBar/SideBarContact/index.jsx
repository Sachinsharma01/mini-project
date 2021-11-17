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

  const active = activeUser ? "active": "";
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        display: "flex",
        marginTop: "10px",
        marginLeft: "10px",
        borderRadius: "10px"
      }}
      className={active}
      onClick={activeUserHandler}
    >
      <div style={{ width: "100%", display: "flex", marginTop: "10px" }}>
        <div style={{ marginLeft: "10px" }}>
          <UserIcon src={user.profile_pic} online={user.available} />
        </div>
        <div
          style={{
            marginLeft: "10px",
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            color: activeUser ? "black" : "grey"
          }}
        >
          {name}
          <p style={{ fontWeight: "normal" }}>
            {message.substring(0, 20) + " ..."}
          </p>
        </div>
        <div>{timeStamp}</div>
      </div>
    </div>
  );
};

export default SidebarContact;
