import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Tablebody = ({ users: { users, loading } }) => {
  return (
    <Fragment>
      {users.map(item => (
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
  users: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, null)(Tablebody);
