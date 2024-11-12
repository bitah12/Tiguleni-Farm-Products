import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Navbar from "../navbar/Navbar";

const Messaging = () => {
  const [contacts] = useState([
    { name: "Nduayhuoo Bitah", status: "alright alright", avatar: "https://via.placeholder.com/40" },
    { name: "Lali Ackeem", status: "hello", avatar: "https://via.placeholder.com/40" },
    { name: "Susan", status: "thanks for the quality products", avatar: "https://via.placeholder.com/40" },
    { name: "Chimwemwe", status: "sent", avatar: "https://via.placeholder.com/40" },
  ]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex">
        <Sidebar contacts={contacts} selectContact={setSelectedContact} />
        <ChatArea selectedContact={selectedContact} />
      </main>
    </div>
  );
};


export default Messaging;
