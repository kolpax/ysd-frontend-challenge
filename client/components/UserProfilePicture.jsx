import React from 'react';

import './UserProfilePicture.scss';

const UserProfilePicture = ({ userId }) => {
  if (!userId) {
    return <div className='user-profile-picture user-profile-picture--placeholder' />
  }

  return (
    <img className='user-profile-picture' src={`https://randomuser.me/api/portraits/lego/${userId - 1}.jpg`} alt='User' />
  );
};

export default UserProfilePicture;
