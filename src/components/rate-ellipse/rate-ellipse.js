import React, { Component } from 'react'

import './rate-ellipse.css'

export default class RateEllipse extends Component {
  render() {
    const { rate } = this.props
    if (rate) {
      let classes = 'rate-ellipse '
      switch (true) {
        case rate > 7:
          classes += 'good'
          break
        case rate <= 7 && rate > 4:
          classes += 'normal'
          break
        case rate <= 5 && rate > 2:
          classes += 'bad'
          break
        case rate <= 2:
          classes += 'nothing'
          break
        default:
          break
      }
      return <div className={classes}>{this.props.rate.toFixed(1)}</div>
    } else return <div className="rate-ellipse">0.0</div>
  }
}
