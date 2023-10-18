import React from 'react'
import { ApiOutlined } from '@ant-design/icons'
import './offline-description.css'

const OfflineDescription = () => {
  return (
    <div className="offline-block">
      <ApiOutlined style={{ position: 'absolute', translate: '43vh 10vh' }} />
      <h2> Seems like you have lost internet connection. Please, take sure about that.</h2>
    </div>
  )
}

export default OfflineDescription
