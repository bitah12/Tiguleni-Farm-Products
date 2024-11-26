import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    profileImage: null,
  });

  const API_BASE_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}/userprofile`; 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/userprofile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data);
        setFormData({
          username: data.name || '',
          profileImage: data.profileImage || null,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
  };

  const handleSave = async () => {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    if (formData.profileImage) {
      formDataToSubmit.append('image', formData.profileImage);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/userprofile/update-image`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <p className="text-lg font-medium">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <img
            src={user?.profileImage || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg"
          />
        </div>
        <div className="text-center">
          {!isEditing ? (
            <>
              <h1 className="text-3xl font-semibold text-gray-900">{user?.name}</h1>
              <p className="text-xl text-gray-600 mt-2">@{user?.username}</p>
              <button
                onClick={handleEditToggle}
                className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 block w-full text-sm text-gray-900 file:bg-indigo-50 file:border file:rounded-lg file:text-indigo-700"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
