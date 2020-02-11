import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../state/actions'
import { Typography, Form, Input, Button, Icon } from 'antd'

const { Title } = Typography

class ActionForm extends Component {
  componentDidMount() {
    const { actionId, fetchAction, formType } = this.props
    if (formType === 'edit') fetchAction(actionId)
  }

  handleSubmit = e => {
    const {
      actionId,
      updateAction,
      createAction,
      formType,
      form: { validateFields }
    } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        formType === 'edit' ? updateAction(actionId, values) : createAction(values)
      }
    })
  }

  render() {
    const {
      actionId,
      form: { getFieldDecorator },
      formType
    } = this.props

    return (
      <>
        <Title level={3} className="heading-wrapper">
          Actions
        </Title>

        <div className="content-wrapper">
          <Form
            layout="horizontal"
            onSubmit={this.handleSubmit}
            className="ant-advanced-search-form"
          >
            <Form.Item label="Label" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('label', {
                rules: [{ required: true }]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Action Type" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('action_type')(<Input />)}
            </Form.Item>

            <Form.Item label="Cover Start Date" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('cover_start_date')(<Input />)}
            </Form.Item>

            <Form.Item label="Total Premiums" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('total_premium')(<Input />)}
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Link to={`/`} style={{ marginLeft: '10px' }}>
                <Button type="secondary">
                  <Icon type="left" style={{ paddingRight: '5px' }} />
                  Cancel
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </>
    )
  }
}

ActionForm = Form.create({
  name: 'action_form',
  mapPropsToFields({ item }) {
    if (item) {
      return {
        label: Form.createFormField({
          ...item.label,
          value: item.label
        }),
        action_type: Form.createFormField({
          ...item.action_type,
          value: item.action_type
        }),
        cover_start_date: Form.createFormField({
          ...item.cover_start_date,
          value: item.cover_start_date
        }),
        total_premium: Form.createFormField({
          ...item.total_premium,
          value: item.total_premium
        })
      }
    }
  }
})(ActionForm)

const mapStateToProps = ({ shared: { item } }, { match: { params } }) => ({
  item: item.item,
  ...params
})

const mapDispatchToProps = actions

ActionForm = connect(mapStateToProps, mapDispatchToProps)(ActionForm)

export default ActionForm
