import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../actions/user';

import Spinner from './spinner/Spinner';
import Tablehead from './Tablehead';
import Tablebody from './Tablebody';

const Tabel = ({ getUsers, users: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Fragment>
      {users === null && loading ? (
        <Spinner />
      ) : (
        <table className='table table-borderless'>
          <thead>
            <Tablehead />
          </thead>
          <tbody>
            <Tablebody />
          </tbody>
        </table>
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
