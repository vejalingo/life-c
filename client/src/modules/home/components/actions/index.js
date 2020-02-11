import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../state/actions'
import { Link } from 'react-router-dom'
import List from './List'

import { Typography, Button } from 'antd'
const { Title } = Typography

class Main extends Component {
  componentDidMount() {
    const { fetchActions } = this.props
    fetchActions()
  }

  render() {
    const { fetching, actionId } = this.props
    return (
      <>
        <Title level={3} className="heading-wrapper">
          Welcome
          <Title type="secondary" level={4}>
            View actions
          </Title>
        </Title>

        <div className="filter-wrapper">
          <Link to="/create">
            <Button type="secondary">Create action</Button>
          </Link>
        </div>

        <div className="content-wrapper">
          <List {...this.props} isLoading={fetching} />
        </div>
      </>
    )
  }
}

Main.propTypes = {}

const mapStateToProps = ({ shared }) => ({
  ...shared.list
})

const mapDispatchToProps = actions

Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main
