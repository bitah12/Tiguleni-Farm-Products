import React from "react";

const ContactsList = ({ contacts, onContactClick }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Contacts</h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
            onClick={() => onContactClick(contact)}
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">{contact.name[0]}</span>
            </div>
            <p className="text-gray-800">{contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
