import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './spinner/Spinner';

const SearchField = ({ users: { users, loading } }) => {
  const onChange = e => {
    if (users !== null && loading === false) {
      const originalUserList = users.map(item => item).toString();
      console.log(originalUserList);
      //console.log(typeof users.name);
      if (originalUserList === e.target.value) {
        console.log('hello');
      }
    }
  };

  return (
    <Fragment>
      {users === null && loading ? (
        <Spinner />
      ) : (
        <input
          type='text'
          name='name'
          className='form-control my-3'
          placeholder='Search...'
          value={users.name}
          onChange={e => onChange(e)}
        />
      )}
    </Fragment>
  );
};

SearchField.propTypes = {
  users: PropTypes.object
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, null)(SearchField);
