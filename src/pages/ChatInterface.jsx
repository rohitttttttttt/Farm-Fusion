import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const ChatInterface = () => {
  const [users] = useState([
    { id: 1, name: 'Ramu kaka', profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'ramesh kisan bolte', profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    // Add more users as needed
  ]);

  const [activeUser, setActiveUser] = useState(null);
  const [showUserList, setShowUserList] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [activeUser.id]: [
          ...(prevMessages[activeUser.id] || []),
          { text: message, sender: 'me' },
        ],
      }));
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* User List */}
      <div
        className={`w-full md:w-1/4 bg-gray-200 text-black p-4 overflow-y-auto ${
          showUserList ? '' : 'hidden md:block'
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center mb-4 p-3 cursor-pointer rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-600 ${
                activeUser?.id === user.id ? 'bg-gray-300' : ''
              }`}
              onClick={() => {
                setActiveUser(user);
                setShowUserList(false);
              }}
            >
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-12 h-12 rounded-full mr-4 border-2 border-gray-900"
              />
              <span className="text-lg font-semibold">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Box */}
      <div className={`flex-1 p-4 ${showUserList ? 'md:w-3/4' : 'w-full'}`}>
        {/* Show the chat area only if an active user is selected */}
        {activeUser && (
          <>
            <div className="flex items-center justify-between mb-4">
              <button
                className="md:hidden bg-gray-900 text-white p-2 rounded-full shadow-md"
                onClick={() => setShowUserList(true)}
              >
                <IoMdArrowBack className="text-2xl" />
              </button>
              <h2 className="text-2xl font-semibold text-gray-900">
                {activeUser.name}
              </h2>
            </div>
            <div className="flex flex-col h-[calc(100vh-200px)] border border-gray-300 rounded-lg bg-white shadow-md overflow-hidden">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Display chat messages */}
                {(messages[activeUser.id] || []).map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      msg.sender === 'me' ? 'justify-end' : ''
                    }`}
                  >
                    {msg.sender !== 'me' && (
                      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    )}
                    <div
                      className={`${
                        msg.sender === 'me'
                          ? 'bg-blue-500 text-white'
                          : 'bg-green-500 text-white'
                      } p-3 rounded-lg max-w-xs shadow-md`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-200 p-4 border-t border-gray-300 flex items-center">
                <input
                  type="text"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md mr-2"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
