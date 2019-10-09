import React, { useState } from 'react';
import cx from "classnames";

import UsersTable from './UsersTable.jsx';
import UserDetails from './UserDetails.jsx';
import close from "@youseedk/dna/svg/close.svg";

import './UsersPage.scss';

const UsersPage = () => {
  const [selectedUserId, setSelectedUserId] = useState(undefined);

  return (
    <section className='users-page'>
      <div className='users-page__users-table'>
        <UsersTable selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} />
      </div>
      <div className='users-page__seperator' />
      <div className={cx('users-page__user-details', { 'users-page__user-details--show': !!selectedUserId })}>
        <UserDetails userId={selectedUserId} />
      </div>
      {selectedUserId && (
        <div
          className='users-page__dismiss'
          onClick={() => setSelectedUserId(undefined)}
          dangerouslySetInnerHTML={{ __html: close }}
        />
      )}
    </section>
  );
};

export default UsersPage;
