import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 56,
      margin: 70,
      top: 40,
      color: '#D0D0D0',
    }}
    spin
  />
)

const Spinner = () => <Spin indicator={antIcon} />

export default Spinner
