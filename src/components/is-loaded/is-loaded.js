import React, { Component } from 'react'

import Spinner from '../spinner/spinner'
import './is-loaded.css'

export default class IsLoaded extends Component {
  render() {
    return (
      <div className="before-load">
        <Spinner />
        <h2>Nothing to show...</h2>
      </div>
    )
  }
}
