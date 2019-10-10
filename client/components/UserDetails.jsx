import React from 'react';
import useFetch from '../hooks/useFetch';
import cx from 'classnames';

import Placeholder from './Placeholder.jsx';
import UserProfilePicture from './UserProfilePicture.jsx';
import simpleArrowRight from "@youseedk/dna/svg/simple-arrow-right.svg";
import simpleArrowLeft from "@youseedk/dna/svg/simple-arrow-left.svg";

import './UserDetails.scss';

const Info = ({ label, value }) =>
  <div className='info'>
    <label className='info__label'>{label}</label>
    <div className='info__value'>{value}</div>
  </div>;

const UserDetails = ({ className, userId, onPrevUser, onNextUser }) => {
  const cn = cx('user-details', className);
  const { data: user, loading } = useFetch(`http://localhost:3000/api/user/${userId}`, { skip: !userId });

  return (
    <div className={cn}>
      <header className='user-details__header'>
        {userId && onPrevUser && <div className='user-details__header-arrow user-details__header-arrow--prev' dangerouslySetInnerHTML={{ __html: simpleArrowLeft }} onClick={onPrevUser} />}
        <div className='user-details__header-spacer' />
        <UserProfilePicture userId={user ? user.id : undefined} />
        <div className='user-details__header-titles'>
          {user ? (
            <React.Fragment>
              <div className='ys-primary-title'>{user.name}</div>
              <div className='ys-subtitle'>{user.email}</div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className='user-details__header-title-placeholder' />
              <div className='user-details__header-subtitle-placeholder' />
            </React.Fragment>
          )}
        </div>
        <div className='user-details__header-spacer' />
        {userId && onNextUser && <div className='user-details__header-arrow' dangerouslySetInnerHTML={{ __html: simpleArrowRight }} onClick={onNextUser} />}
      </header>
      <article className='user-details_main'>
        {user ? (
          <section className='user-details_info-section'>
            <Info label='ID' value={user.id} />
            <Info label='Name' value={user.name} />
            <Info label='Email' value={user.email} />
            <Info label='Website' value={user.website} />
            <Info label='Phone' value={user.phone} />
            <Info label='Username' value={user.username} />
            <Info label='Company' value={user.company.name} />
            <Info label='Address' value={[user.address.street, user.address.suite, ',', user.address.zipcode, ',', user.address.city].filter(x => x).join(' ')} />
            <img className='user-details_map' src={`https://maps.googleapis.com/maps/api/staticmap?center=${user.address.geo.lat},${user.address.geo.lng}&zoom=4&size=1200x600&maptype=roadmap&key=AIzaSyAfMHTM13jDCPMLXqw5rd2Fpj4kjKSNc9g&markers=color:red%7C${user.address.geo.lat},${user.address.geo.lng}`} alt='Address location' />
          </section>
        ) : (
          <section className='user-details_info-section--placeholder'>Loading user details...</section>
        )}
      </article>
    </div>
  )
};

export default UserDetails;
