import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useAppContext } from "../../base/context";
import ContactBox from "./ContactBox";
import SearchBox from "./SearchBox";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const Sidebar = ({ setSearchNew, hamOpen, setHamOpen }) => {
  const [{ user, senderUser }, dispatch] = useAppContext();
  const [selectedUser, setSelectedUser] = useState(senderUser);
  const [contactBox, setContactBox] = useState(true);

  useEffect(() => {
    dispatch({
      type: "SET_SENDER",
      payload: selectedUser,
    });
  }, [selectedUser, setSelectedUser, dispatch]);

  if (user?.user_name === "admin@chatverse.com") {
    return (
      <div className={`relations ${hamOpen ? "open" : ""}`}>
        <SearchBox
          admin
          selectedUser={selectedUser}
          setHamOpen={setHamOpen}
          setSelectedUser={setSelectedUser}
          setSearchNew={setSearchNew}
        />
      </div>
    );
  }

  return (
    <>
      <div className={`relations ${hamOpen ? "open" : ""}`}>
        {contactBox ? (
          <ContactBox
            selectedUser={selectedUser}
            setHamOpen={setHamOpen}
            setSelectedUser={setSelectedUser}
            setSearchNew={setSearchNew}
          />
        ) : (
          <SearchBox
            selectedUser={selectedUser}
            setHamOpen={setHamOpen}
            setSelectedUser={setSelectedUser}
            setSearchNew={setSearchNew}
          />
        )}
        <div className="sidebar__footer">
          <AiOutlineUser
            className={`userIcon ${contactBox && "active"}`}
            onClick={() => setContactBox(true)}
          />
          <AiOutlineSearch
            className={`searchIcon ${!contactBox && "active"}`}
            onClick={() => setContactBox(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
