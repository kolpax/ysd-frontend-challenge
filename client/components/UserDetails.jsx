import React from 'react';
import useFetch from '../hooks/useFetch';
import cx from 'classnames';

import UserProfilePicture from './UserProfilePicture.jsx';

import './UserDetails.scss';

const Info = ({ label, value }) =>
  <div className='info'>
    <label className='info__label'>{label}</label>
    <div className='info__value'>{value}</div>
  </div>;

const UserDetails = ({ className, userId }) => {
  const cn = cx('user-details', className);
  const { data: user, loading } = useFetch(`http://localhost:3000/api/user/${userId}`, { skip: !userId });

  if (!userId) {
    return <div className={cn}>Select a user to see more details</div>;
  }

  if (loading) {
    return <div className={cn}>Loading user details</div>;
  }

  return (
    <div className={cn}>
      <header className='user-details__header'>
        <UserProfilePicture userId={user.id} />
        <div className='user-details__header-titles'>
          <div className='ys-primary-title'>{user.name}</div>
          <div className='ys-subtitle'>{user.email}</div>
        </div>
      </header>
      <section className='user-details_info-section'>
        <Info label='ID' value={user.id} />
        <Info label='Name' value={user.name} />
        <Info label='Email' value={user.email} />
        <Info label='Website' value={user.website} />
        <Info label='Phone' value={user.phone} />
        <Info label='Username' value={user.username} />
        <Info label='Address' value={[user.address.street, user.address.suite, ',', user.address.zipcode, ',', user.address.city].filter(x => x).join(' ')} />
        <Info label='Company' value={user.company.name} />
      </section>
    </div>
  )
};

export default UserDetails;
