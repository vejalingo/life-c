import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, Select } from 'antd'
import Nav from 'shared/components/nav'
import MainFooter from './MainFooter'
// import Avatar from '../Nav/AvatarDropdown'

const { Header, Content } = Layout
const { Option } = Select

const BasicLayout = ({ children }) => {
  const [collapsed, onCollapsed] = useState(false)

  const onCollapse = pred => {
    onCollapsed(pred)
  }

  const toggle = () => {
    onCollapsed(!collapsed)
  }

  const layoutContent = (
    <Layout>
      <Header>
        <span className="ant-pro-global-header-trigger">
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
            className="trigger"
          />
        </span>

        {/* <span className="menu-right">
          <Avatar menu />
        </span> */}
      </Header>

      <Content>
        <div style={{ minHeight: 360 }}>{children}</div>
      </Content>
      <MainFooter />
    </Layout>
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav isCollapsed={collapsed} OnCollapse={onCollapse} />
      {layoutContent}
    </Layout>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.object.isRequired
}
export default BasicLayout
