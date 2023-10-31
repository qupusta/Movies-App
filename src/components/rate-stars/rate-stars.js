import React, { useState } from 'react'
import { Rate } from 'antd'

import Service from '../../service/service'

const service = new Service()

const RateStars = ({ guestSessionId, movieId, onChangeRate, rate }) => {
  const [value, setValue] = useState(0)

  return (
    <span>
      <Rate
        style={{ fontSize: 16, textWrap: 'nowrap' }}
        count={10}
        allowHalf
        onChange={(value) => {
          setValue(value)
          service.postRate(guestSessionId, movieId, value)
          onChangeRate(movieId, value)
        }}
        value={rate}
      />
    </span>
  )
}
export default RateStars
