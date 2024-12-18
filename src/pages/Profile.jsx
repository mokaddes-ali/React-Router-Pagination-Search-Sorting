import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const {state} = useLocation();
    console.log(state);

  return (
    <div className="profile-container">
        {state ? <>
      <h2 className="profile-heading">User Profile</h2>
      <div className="profile-content">
        <div className="profile-item">
          <strong>Name:</strong> <span>{state.name}</span>
        </div>
        <div className="profile-item">
          <strong>Email:</strong> <span>{state.email}</span>
        </div>
        <div className="profile-item">
          <strong>Phone:</strong> <span>{state.phone}</span>
        </div>
        <div className="profile-item">
          <strong>Address:</strong> <span>{state.address}</span>
        </div>
        <div className="profile-item">
          <strong>Profile Picture:</strong> 
          <img
            src="https://via.placeholder.com/100"
            alt="User Profile"
            className="profile-picture"
          />
        </div>
        <div className="profile-item">
          <strong>Bio:</strong> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="profile-item">
          <strong>Social Media:</strong> 
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      </>: <h2 className="profile-heading">User Profile Not Found</h2>}
    </div>
  );
};

export default Profile;
