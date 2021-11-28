import React, { useEffect, useMemo, useState } from 'react'
import './Main.css'
import MessageCard from '../MessageCard'
import { fetchMessages } from '../../base/fetchData'
import { useAppContext } from '../../base/context'
import ChatInput from '../ChatInput'
import {
  pushDeleteRequest,
  pushMessage,
  pushRelation,
} from '../../base/pushData'
import ScrollableFeed from 'react-scrollable-feed'
// import { fetchAuthUser } from '../../base/auth'

const Main = ({ searchNew, hamOpen }) => {
  const [{ user, senderUser }, dispatch] = useAppContext();
  const [newmsg, setnewmsg] = useState([]);

  const uids = useMemo(
    () => [user?.uid.toString(), senderUser?.uid.toString()],
    [user?.uid, senderUser?.uid]
  );
  uids.sort();

  useEffect(() => {
    fetchMessages(uids[1], uids[0], dispatch, setnewmsg);
  }, [senderUser, dispatch, uids]);

  useEffect(() => {
    setnewmsg([]);
  }, [senderUser]);

  const handlePushMessage = (msg) => {
    if (searchNew) {
      pushRelation(user, senderUser);
    }
    pushMessage(msg, uids[0], uids[1], senderUser);
  };

  if (user?.user_name === "admin@chatverse.com") {
    // const sUser = fetchAuthUser(senderUser)
    return (
      <div className={`mainContainer ${hamOpen ? "open" : ""}`}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#c4c4c4",
          }}
        >
          <div>
            <h3>
              Name: {senderUser?.first_name} {senderUser?.last_name}
            </h3>
            <h3>User Name: {senderUser?.user_name}</h3>
            <h3>Email: {senderUser?.email}</h3>
            <h3>Created At: {senderUser?.createdAt}</h3>
            <h3>Last Login: {senderUser?.lastLogin}</h3>
            <h3>Current Status: {senderUser?.status ? "Online" : "Offline"}</h3>
            <h3>UID: {senderUser?.uid}</h3>
          </div>
          <button onClick={() => pushDeleteRequest(senderUser)}>
            Delete User
          </button>
        </div>
      </div>
    );
  }

  if (user?.user_name === 'admin@chatverse.com') {
    // const sUser = fetchAuthUser(senderUser)
    return (
      <div className={`mainContainer ${hamOpen ? 'open' : ''}`}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#c4c4c4',
          }}
        >
          <div>
            <h3>
              Name: {senderUser?.first_name} {senderUser?.last_name}
            </h3>
            <h3>User Name: {senderUser?.user_name}</h3>
            <h3>Email: {senderUser?.email}</h3>
            <h3>Created At: {senderUser?.createdAt}</h3>
            <h3>Last Login: {senderUser?.lastLogin}</h3>
            <h3>Current Status: {senderUser?.status ? 'Online' : 'Offline'}</h3>
            <h3>UID: {senderUser?.uid}</h3>
          </div>
          <button onClick={() => pushDeleteRequest(senderUser)}>
            Delete User
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`mainContainer ${hamOpen ? "open" : ""}`}>
      <ScrollableFeed>
        {newmsg.map((obj, index) => {
          if (obj) {
            return (
              <>
                <MessageCard key={index} sender={obj?.sender === user?.uid}>
                  {obj?.msg}
                </MessageCard>
              </>
            );
          } else {
            return "";
          }
        })}
      </ScrollableFeed>
      {!hamOpen && <ChatInput handleClick={handlePushMessage} />}
    </div>
  )
}
export default Main
