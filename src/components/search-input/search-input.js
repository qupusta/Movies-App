/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Input } from 'antd'
export default class SearchInput extends Component {
  render() {
    const { onUpdateFilms } = this.props
    const onSearch = (e) => {
      if (!e.target.value.match(/^[ ]+$/)) {
        onUpdateFilms(e.target.value)
        if (e.target.value == ' ') {
          onUpdateFilms('')
        }
      }
    }

    return <Input placeholder="Type to search..." onChange={debounce(onSearch, 450)} />
  }
}

function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this,
      args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
