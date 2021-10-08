import React from 'react'
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import { changeLoginState } from '../actions/auth';

/**
 * header component
 */
// import Header from './header';

/**
 * footer component
 */
// import Footer from './footer';

/**
 * main routes
 */
import Dashboard from '../containers/dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    }
  }
}

export default  withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);