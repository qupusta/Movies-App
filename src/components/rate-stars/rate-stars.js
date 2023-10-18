import React, { useState } from 'react'
import { Rate } from 'antd'
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
const RateStars = ({ rate }) => {
  const [value, setValue] = useState(rate)

  return (
    <span>
      <Rate allowHalf tooltips={desc} onChange={setValue} value={value / 2} />
    </span>
  )
}
export default RateStars
