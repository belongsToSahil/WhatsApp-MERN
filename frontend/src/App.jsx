import React, { useEffect } from "react";
import "./App.css";
import Chats from "./Components/Chats";
import Sidebar from "./Components/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/find").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("0b752c06613f4bbf6356", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
 

  return (
    <div className="flex">
    
      <Sidebar/>
     <Chats messages = {messages}/>
      {/* sidebar */}
      {/* chats */}
    </div>
  );
}

export default App;
