import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './HeaderStyle.css';

class Header extends Component {
  renderLinks() {
    let links;
    links = this.props.authenticated ? (
      <div>
        <Link to="/signout">Signout</Link>
        <Link to="/feature">Feature</Link>
      </div>
    ) : (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
    );

    return links;
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};
export default connect(mapStateToProps)(Header);
