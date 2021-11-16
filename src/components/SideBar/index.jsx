import React from "react";
import "./Sidebar.css";
import SidebarContact from "./SideBarContact";
import { fetchMessages, fetchRelations } from "../.././base/fetchData";

const Sidebar = () => {
  const dummyRelations = fetchRelations();
  //   console.log(dummyRelations);
  const messages = fetchMessages();

  return (
    <div className="relations">
      {dummyRelations.map((relation) => (
        <SidebarContact
          key={relation}
          name={relation}
          message="hello there!!"
          timeStamp="2:56"
        />
      ))}
    </div>
  );
};

export default Sidebar;
