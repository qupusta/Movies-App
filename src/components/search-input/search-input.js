/* eslint-disable prettier/prettier */
import React from 'react'
import { Input } from 'antd'
const SearchInput = ({ onUpdateFilms }) => {
  return (
    <Input
      placeholder="Type to search..."
      onKeyDown={(e) => {
        if (e.code === 'Enter' && !e.target.value.match(/^[ ]+$/)) {
          onUpdateFilms(e.target.value)
          e.target.value = ''
        }
      }}
    />
  )
}

export default SearchInput
