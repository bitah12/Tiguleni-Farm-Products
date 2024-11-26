import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";
import Navbar from "../navbar/Navbar";

const Messaging = () => {
  const location = useLocation();
  const { receiverUserId, receiverUsername } = location.state || {};
  const [currentChat, setCurrentChat] = useState({
    receiverUserId,
    receiverUsername,
  });
  
  const user = JSON.parse(localStorage.getItem("user")); 
  
  const senderDetails = {
    senderId: user?.userId,  
    senderName: user?.username,
  };
  const handleSelectContact = (contact) => {
    setCurrentChat({
      receiverUserId: contact.contactId,
      receiverUsername: contact.name,
    });
  };
  const shouldShowNavbar = location.pathname !== "/seller/messages";

  return (<div className=" h-screen">
    {shouldShowNavbar && <Navbar />}

    <div className="flex h-full">
      
      <Sidebar senderId={senderDetails.senderId} onSelectContact={handleSelectContact} />
      
      <div className="flex-grow">
        {currentChat.receiverUserId ? (
          <ChatArea
            senderDetails={senderDetails}
            receiverDetails={currentChat}
          />
        ) : (
          <p className="text-center mt-10 text-gray-500">Select a contact to start chatting.</p>
        )}
      </div>
    </div>
  </div>
  
    
  );
};

export default Messaging;
