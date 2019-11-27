import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ value, onChange }) => {
  return (
    <Fragment>
      <input
        type='text'
        name='query'
        className='form-control my-3'
        placeholder='Search...'
        value={value}
        onChange={e => onChange(e)}
      />
    </Fragment>
  );
};

SearchField.propTypes = {
  users: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchField;
