import React, { useState, useCallback, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import cx from "classnames";

import Placeholder from './Placeholder.jsx';
import Navbar from './Navbar.jsx';
import UsersTable from './UsersTable.jsx';
import UserDetails from './UserDetails.jsx';
import close from "@youseedk/dna/svg/close.svg";

import './UsersPage.scss';

const UsersPage = () => {
  const [selectedUserId, setSelectedUserId] = useState(undefined);
  const { data: users, loading } = useFetch('http://localhost:3000/api/users');

  const selectedUserIndex = useMemo(() => users ? users.findIndex(user => user.id === selectedUserId) : -1, [users, selectedUserId]);

  const incrementSelectedUser = useCallback((amount) => {
    const prevUser = users[selectedUserIndex + amount];

    setSelectedUserId(prevUser.id);
  }, [users, selectedUserIndex, setSelectedUserId]);

  if (loading) {
    return <Placeholder>Loading...</Placeholder>;
  }

  return (
    <section className='users-page'>
      <Navbar />
      <div className='users-page__main'>
        <div className='users-page__users-table'>
          <UsersTable
            users={users}
            selectedUserId={selectedUserId}
            onSelectUser={setSelectedUserId}
          />
        </div>
        <div className='users-page__seperator' />
        <div className={cx('users-page__user-details', { 'users-page__user-details--show': !!selectedUserId })}>
          <UserDetails
            userId={selectedUserId}
            onPrevUser={selectedUserIndex > 0 ? () => incrementSelectedUser(-1) : undefined}
            onNextUser={selectedUserIndex < users.length - 1 ? () => incrementSelectedUser(1) : undefined}
          />
        </div>
        {selectedUserId && (
          <div
            className='users-page__dismiss'
            onClick={() => setSelectedUserId(undefined)}
            dangerouslySetInnerHTML={{ __html: close }}
          />
        )}
      </div>
    </section>
  );
};

export default UsersPage;
