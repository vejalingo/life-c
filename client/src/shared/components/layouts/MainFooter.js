import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Footer } = Layout
const MainFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center'
      }}
    >
      Veli Sithole | LifeCheq
    </Footer>
  )
}

MainFooter.propTypes = {}

export default MainFooter
