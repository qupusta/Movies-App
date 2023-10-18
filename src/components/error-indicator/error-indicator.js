import React from 'react'
import { MehOutlined } from '@ant-design/icons'
import { Alert, Space } from 'antd'
import './error-indicator.css'

const ErrorIndicator = ({ error }) => {
  return (
    <div className="error-wrapper">
      <MehOutlined style={{ fontSize: 100, color: 'grey' }} />
      <h2>Something went wrong...</h2>
      <h3>Content wasn`t loaded</h3>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message={error.message} type="error" showIcon style={{ fontSize: 18 }} />
      </Space>
    </div>
  )
}

export default ErrorIndicator
