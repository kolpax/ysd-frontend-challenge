import React from 'react';
import cx from "classnames";

import './UsersTableRow.scss';

const UsersTableRow = ({ selected, user, onSelect }) => {
  return (
    <tr
      key={user.id}
      className={cx('users-table-row', { 'users-table-row--selected': selected})}
      onClick={() => onSelect(user.id)}
    >
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.company.name}</td>
    </tr>
  );
}

export default UsersTableRow;
