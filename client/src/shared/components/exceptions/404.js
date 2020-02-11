/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'

const NotFoundPage = ({ copy, history }) => (
  <Result
    status="404"
    title="Oh noooo"
    subTitle="Not found"
    extra={
      <Button type="primary" onClick={history.goBack}>
        home
      </Button>
    }
  />
)

NotFoundPage.propTypes = {
  history: PropTypes.object.isRequired
}

export default NotFoundPage
