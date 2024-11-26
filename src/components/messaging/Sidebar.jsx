import React, { useEffect, useState } from "react";

const Sidebar = ({ senderId, onSelectContact }) => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `https://api-6bz4k6kh3a-uc.a.run.app/contacts?userId=${senderId}`
        );
        const data = await response.json();

        const uniqueContacts = [];
        const contactSet = new Set();

        for (const contact of data.contacts) {
          if (!contactSet.has(contact.contactId)) {
            uniqueContacts.push(contact);
            contactSet.add(contact.contactId);
          }
        }
        setContacts(uniqueContacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [senderId]);

  return (
    <aside className="w-80 bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Contacts</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li
            key={contact.contactId}
            onClick={() => onSelectContact(contact)}
            className="p-2 bg-white rounded-lg shadow flex items-center space-x-3 hover:bg-blue-100 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="font-bold">{contact.name[0]}</span>
            </div>
            <p className="font-medium">{contact.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
