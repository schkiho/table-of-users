import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../actions/user';

import Spinner from './spinner/Spinner';
import Tablehead from './Tablehead';
import Tablebody from './Tablebody';
import SearchField from './SearchField';

const Tabel = ({ getUsers, users: { users, loading } }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <Fragment>
      {users === null && loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <SearchField value={searchTerm} onChange={handleSearch} />
          <table className='table table-borderless'>
            <thead>
              <Tablehead users={users} />
            </thead>
            <tbody>
              <Tablebody searchTerm={searchTerm} data={users} />
            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

Tabel.propTypes = {
  getUsers: PropTypes.func,
  users: PropTypes.object
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { getUsers })(Tabel);
