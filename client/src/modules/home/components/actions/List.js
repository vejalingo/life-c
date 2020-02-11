/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import withRenderComp from 'shared/hocs/withRenderComp'
import { Table, Menu, Dropdown, Modal, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { confirm } = Modal

const ActionList = ({ listItems, removeAction, isLoading, ...rest }) => {
  function showDeleteConfirm(id) {
    confirm({
      title: 'Are you sure you want to delete this action?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        removeAction(id)
      }
    })
  }

  const menu = id => (
    <Menu>
      <Menu.Item key="1" onClick={() => showDeleteConfirm(id)}>
        <Icon type="delete" />
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: 'Label',
      dataIndex: 'label'
    },
    {
      title: 'Action Type',
      dataIndex: 'action_type'
    },
    {
      title: 'Cover Start Date',
      dataIndex: 'cover_start_date'
    },
    {
      title: 'Total Premium',
      dataIndex: 'total_premium'
    },
    {
      title: 'Actions',
      render: data => (
        <Dropdown.Button overlay={menu(data?._id)}>
          <Icon type="edit" style={{ paddingRight: '5px' }} />
          <Link to={`/edit/${data?._id}`}>Edit</Link>
        </Dropdown.Button>
      )
    }
  ]

  return <Table columns={columns} dataSource={listItems} loading={isLoading} pagination />
}

export default withRenderComp(ActionList)
