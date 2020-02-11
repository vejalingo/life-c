/* eslint-disable react/display-name */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

// Layouts
import BasicLayout from 'shared/components/layouts/BasicLayout'
import EmptyLayout from 'shared/components/layouts/EmptyLayout'

// Main
import MainComponent from './modules/home/components/actions/index'
import ActionForm from './modules/home/components/actions/Form'

// Exception
import NotFoundPage from './shared/components/exceptions/404'
const Wrapper = ({ wrapper: Wrapped, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Wrapped>
        <Component {...props} />
      </Wrapped>
    )}
  />
)

const form = (Form, type, options) => props => <Form {...props} formType={type} {...options} />

const Routes = ({ history }) => (
  <Switch history={history}>
    <Wrapper exact path="/" wrapper={BasicLayout} component={MainComponent} />
    <Wrapper
      exact
      path="/edit/:actionId"
      wrapper={BasicLayout}
      component={form(ActionForm, 'edit')}
    />
    <Wrapper exact path="/create" wrapper={BasicLayout} component={form(ActionForm, 'create')} />
    <Wrapper wrapper={EmptyLayout} component={NotFoundPage} />
  </Switch>
)

Routes.propTypes = {
  history: PropTypes.object.isRequired
}

Wrapper.propTypes = {
  wrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

export default Routes
