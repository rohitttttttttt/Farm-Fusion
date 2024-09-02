import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    name: 'Ramesh kisan',
    address: 'lnct kalej , raisen road , bhopal',
    phone: '1234567890',
    email: 'ramesh.kisan@example.com',
    orders: 12,
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });

  const [editing, setEditing] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
    }
  };

  const handleSaveChanges = () => {
    // Implement save functionality here
    setEditing(false);
  };

  return (
    <div className="flex flex-col items-center md:items-start bg-gray-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      {/* Profile Picture */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-4 md:mb-0">
        <img src={profile.profilePicture} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-4 md:ml-8">
        {editing ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
            />
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded"
              placeholder="Name"
            />
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded"
              placeholder="Address"
            />
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded"
              placeholder="Phone"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded"
              placeholder="Email"
            />
            <button
              onClick={handleSaveChanges}
              className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-gray-600 mt-2">{profile.address}</p>
            <p className="text-gray-600 mt-1">Phone: {profile.phone}</p>
            <p className="text-gray-600 mt-1">Email: {profile.email}</p>
            <p className="text-gray-600 mt-1">Orders: {profile.orders}</p>

            {/* Edit Settings Button */}
            <button
              onClick={() => setEditing(!editing)}
              className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
            >
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
