import React, { Component } from 'react'

import './rate-ellipse.css'

export default class RateEllipse extends Component {
  render() {
    let classes = 'rate-ellipse '
    switch (true) {
      case this.props.rate > 8:
        classes += 'good'
        break
      case this.props.rate >= 5:
        classes += 'normal'
        break
      case this.props.rate >= 1:
        classes += 'bad'
        break
      case this.props.rate < 1:
        classes += 'nothing'
        break
      default:
        break
    }
    return <div className={classes}>{this.props.rate.toFixed(1)}</div>
  }
}
