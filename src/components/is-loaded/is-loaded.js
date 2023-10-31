import React, { Component } from 'react'
import './is-loaded.css'
import { FrownOutlined } from '@ant-design/icons'

export default class IsLoaded extends Component {
  render() {
    return (
      <div className="before-load">
        <FrownOutlined style={{ fontSize: 100, color: 'gray', margin: '20px auto', translate: '44.7vh 0' }} />
        <h2>Nothing to show...</h2>
      </div>
    )
  }
}
