import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Tablebody = ({ data, searchTerm }) => {
  const filteredUser = () => {
    if (searchTerm !== '') {
      let filtered = data.filter(item =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase(), 0)
      );
      return filtered;
    } else if (searchTerm === '') {
      return data;
    }
  };

  const userFiltered = filteredUser();

  return (
    <Fragment>
      {userFiltered.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.website}</td>
        </tr>
      ))}
    </Fragment>
  );
};

Tablebody.propTypes = {
  data: PropTypes.array,
  searchTerm: PropTypes.string
};

export default Tablebody;
