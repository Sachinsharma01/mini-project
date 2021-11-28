import React, { useState, useMemo } from "react";
import "./Sidebar.css";
import SidebarContact from "./SideBarContact";
import { fetchSearchResults } from "../.././base/fetchData";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({
  admin,
  setSelectedUser,
  selectedUser,
  setSearchNew,
  setHamOpen,
}) => {
  const [queryData, setQueryData] = useState([]);
  const [query, setQuery] = useState("");

  const handleClick = () => {
    fetchSearchResults(query, setQueryData);
  };

  useMemo(() => {
    if (admin) {
      fetchSearchResults(query, setQueryData);
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <input
          className="searchInput"
          placeholder="Enter user name"
          value={query}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AiOutlineSearch className={`searchIcon`} onClick={handleClick} />
      </div>
      {queryData.map((data, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setSearchNew(true);
              setQuery("");
              setHamOpen(false);
            }}
          >
            <SidebarContact
              active={selectedUser}
              sender={data}
              onClickSearch={() => {}}
              setSearchNew={setSearchNew}
              setSelected={setSelectedUser}
              key={index}
              name={`${data?.first_name} ${data?.last_name}`}
              message={data?.user_name}
            />
          </div>
        );
      })}
    </>
  );
};

export default SearchBox;
