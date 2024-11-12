// src/components/ChatArea.jsx
import React, { useState } from "react";

const ChatArea = ({ selectedContact }) => {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hello, is rice available? I want to buy 500kg.", time: "10:23 am" },
    { sender: "contact", text: "Yes, high-quality rice is available.", time: "11:13 am" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "user", text: newMessage, time: "11:33 am" }]);
      setNewMessage("");
    }
  };

  return (
    <section className="w-3/4 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <img src={selectedContact.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
          <p className="font-semibold">{selectedContact.name}</p>
        </div>
        <button className="text-gray-600">⚙️</button>
      </div>

      <div className="flex-grow space-y-2 overflow-y-auto border-t border-b p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-center space-x-2`}>
            <p className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-100" : "bg-gray-200"} max-w-xs`}>{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center border-t pt-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow px-4 py-2 border rounded-full"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="ml-2 text-blue-500">Send</button>
      </div>
    </section>
  );
};

export default ChatArea;
