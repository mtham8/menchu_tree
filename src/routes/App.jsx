import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute'
import { isAuthenticated } from './helpers'

import MenchuLogin from '../authentication/menchuLogin'
import FamilyTreeInfo from '../familyTree/familyTreeInfo'

const mapStateToProps = ({ auth }) => ({ auth })

class App extends Component {
  render () {
    const { auth } = this.props

    return (
      <Switch>
        <AuthenticatedRoute
          path='/family_tree_info'
          exact
          component={() => <FamilyTreeInfo />}
          cProps={{ auth }}
        />

        {/* <Route
          path='/login'
          component={() =>
            (isAuthenticated(auth)
              ? <Redirect to='/family_tree' />
              : <MenchuLogin />)}
          /> */}

        <Route path='/login' component={() => <MenchuLogin />} />

        <Redirect to='/login' />
      </Switch>
    )
  }
}

export default withRouter(connect(mapStateToProps)(App))
