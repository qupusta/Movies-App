import React from 'react'
import { Tabs } from 'antd'
import './filter.css'
const items = [
  {
    key: '1',
    label: 'Search',
  },
  {
    key: '2',
    label: 'Rated',
  },
]
const Filter = ({ onClickFilter }) => <Tabs defaultActiveKey="1" items={items} onChange={onClickFilter} />
export default Filter
