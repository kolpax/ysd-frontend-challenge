import React from 'react';

import './UserProfilePicture.scss';

const UserProfilePicture = ({ userId }) => {
  return (
    <img className='user-profile-picture' src={`https://randomuser.me/api/portraits/lego/${userId - 1}.jpg`} alt='User' />
  );
};

export default UserProfilePicture;
