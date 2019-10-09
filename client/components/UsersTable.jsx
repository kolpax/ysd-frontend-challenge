import React from 'react';
import useFetch from '../hooks/useFetch';
import cx from 'classnames';

import UsersTableRow from './UsersTableRow.jsx';

import './UsersTable.scss';

const UsersTable = ({ className, selectedUserId, onSelectUser }) => {
  const { data: users, loading } = useFetch('http://localhost:3000/api/users');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx('users-table', className)}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <UsersTableRow
              key={user.id}
              user={user}
              selected={user.id === selectedUserId}
              onSelect={onSelectUser}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
