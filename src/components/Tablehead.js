import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Tablehead = ({ users }) => {
  const getUserKeys = () => {
    let headers = Object.keys(users[0])
      .copyWithin(4, 6)
      .slice(1, 5);

    return headers.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  return (
    <Fragment>
      <tr className='bg-success'>{getUserKeys()}</tr>
    </Fragment>
  );
};

Tablehead.propTypes = {
  users: PropTypes.array
};

export default Tablehead;
