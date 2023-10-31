import React, { useState } from 'react'
import { Pagination } from 'antd'

const PaginationTab = ({ page, totalPages, onUpdateFilms, text }) => {
  const [current, setCurrent] = useState(page)
  const onChange = (page) => {
    onUpdateFilms(text, page)
    setCurrent(page)
  }
  return <Pagination style={{ textAlign: 'center' }} current={current} onChange={onChange} total={totalPages} />
}
export default PaginationTab
