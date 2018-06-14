import React, { Component } from 'react';
import { connect } from 'react-redux';

//HOC
export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate = (prevProps, prevState) => {
      this.shouldNavigateAway();
    };

    shouldNavigateAway() {
      // if not looged in --> navigate to home page
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
