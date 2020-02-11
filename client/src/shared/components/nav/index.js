/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { getModules } from 'shared/static/modules'
// import logo from 'shared/assets/logo.svg'

const { Sider } = Layout
const { SubMenu } = Menu

const Nav = ({ isCollapsed, OnCollapse }) => {
  const modules = getModules()
  const Logo = (
    <div className="ant-pro-sider-menu-logo" id="logo">
      <Link to="/">
        <img
          src={'https://www.lifecheq.co.za/assets/img/lifecheq.svg'}
          alt="logo"
          style={{ height: 32 }}
        />
        <h1>Welcome to the assessment</h1>
      </Link>
    </div>
  )

  return (
    <>
      <Sider collapsible collapsed={isCollapsed} onCollapse={OnCollapse}>
        {Logo}
        {modules.length ? (
          <span>
            <Menu theme="light" mode="inline">
              {modules.map(({ key, link, title, icon, sub }, idx) =>
                sub && sub.length > 0 ? (
                  <SubMenu
                    key={`sub${idx}`}
                    title={
                      <span>
                        <Icon type={icon} />
                        <span>{title}</span>
                      </span>
                    }
                  >
                    {sub &&
                      sub.map((item, index) => (
                        <Menu.Item key={`${item.title.replace(/\s/g, '-')}${index}`} to="veli">
                          <Icon type={item.icon} />
                          <span>
                            <Link to={item.link} className="sub-menu-row">
                              {item.title}
                            </Link>
                          </span>
                        </Menu.Item>
                      ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={`${key}${idx}`}>
                    <Icon type={icon} />
                    <span>
                      <Link to={link}>{title}</Link>
                    </span>
                  </Menu.Item>
                )
              )}
            </Menu>
          </span>
        ) : null}
      </Sider>
    </>
  )
}

Nav.propTypes = {
  copy: PropTypes.object.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  OnCollapse: PropTypes.func.isRequired
}

export default Nav
