// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ contacts, selectContact }) => (
  <aside className="w-1/4 border-r p-4">
    <input
      type="text"
      placeholder="Search"
      className="w-full mb-4 px-4 py-2 border rounded-full"
    />
    <ul className="space-y-4">
      {contacts.map((contact, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => selectContact(contact)}
        >
          <img src={contact.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{contact.name}</p>
            <p className="text-gray-500 text-sm">{contact.status}</p>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
