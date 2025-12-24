import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const { state } = useLocation();
    console.log(state);

  return (
     <>
     { state ? (
    <div className="profile-container">
      <h2 className="profile-heading">User Profile</h2>
      <div className="profile-content">
        <div className="profile-item">
          <strong>Name:</strong> <span>{state.name}</span>
        </div>
        <div className="profile-item">
          <strong>Email:</strong> <span>{state.email}</span>
        </div>
        <div className="profile-item">
          <strong>Address:</strong> <span>{state.city}</span>
        </div>

        <div className="profile-item">
          <strong>Country:</strong> <span>{state.country}
          </span>
        </div>
      </div>
    </div>
     ) : 
     <p> No Profile Exits</p>
     }
   </>
  );
};

export default Profile;
