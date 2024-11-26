import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  Timestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const ChatArea = ({ senderDetails, receiverDetails }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = () => {
      const messagesRef = collection(db, "messages");
      const q = query(
        messagesRef,
        where("conversationId", "in", [
          `${senderDetails.senderId}_${receiverDetails.receiverUserId}`,
          `${receiverDetails.receiverUserId}_${senderDetails.senderId}`,
        ])
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort messages by timestamp
        fetchedMessages.sort(
          (a, b) => a.timestamp.toMillis() - b.timestamp.toMillis()
        );

        setMessages(fetchedMessages);
      });

      return () => unsubscribe();
    };

    fetchMessages();
  }, [senderDetails.senderId, receiverDetails.receiverUserId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const senderId = senderDetails.senderId;
      const senderName = senderDetails.senderName;
      const recipientId = receiverDetails.receiverUserId;
      const recipientName = receiverDetails.receiverUsername;

      const conversationId = `${senderId}_${recipientId}`;
      const reverseConversationId = `${recipientId}_${senderId}`;
      const contactsRef = collection(db, "contacts");
      const messagesRef = collection(db, "messages");

      const messagePayload = {
        senderId,
        recipientId,
        senderName,
        recipientName,
        conversationId,
        message: newMessage,
        timestamp: Timestamp.now(),
      };

      try {
        const contactQuery = query(
          contactsRef,
          where("userOne", "in", [senderId, recipientId]),
          where("userTwo", "in", [senderId, recipientId])
        );

        const querySnapshot = await getDocs(contactQuery);

        if (querySnapshot.empty) {
          await addDoc(contactsRef, {
            userOne: senderId,
            userOneName: senderName,
            userTwo: recipientId,
            userTwoName: recipientName,
            lastMessage: newMessage,
            lastUpdated: Timestamp.now(),
          });
        } else {
          const contactDoc = querySnapshot.docs[0];
          await updateDoc(doc(db, "contacts", contactDoc.id), {
            lastMessage: newMessage,
            lastUpdated: Timestamp.now(),
          });
        }

        await addDoc(messagesRef, messagePayload);

        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.senderId === senderDetails.senderId
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`p-2 m-2 rounded-lg ${
                  msg.senderId === senderDetails.senderId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                <p className="font-medium">{msg.message}</p>
                <small>
                  {new Date(msg.timestamp.toDate()).toLocaleString()}
                </small>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages yet</p>
        )}
      </div>
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          className="flex-grow p-2 border rounded-lg"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
