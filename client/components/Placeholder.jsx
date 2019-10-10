import React from 'react';

import './Placeholder.scss';

const Placeholder = ({children}) => {
  return (
    <div className='placeholder'>
      {children}
    </div>
  );
};

export default Placeholder;
