import React, { Component } from 'react'

import './header.css'

import SearchInput from '../search-input/search-input'
import Filter from '../filter/filter'

export default class Header extends Component {
  render() {
    const { onClickFilter, checkedFilter, onUpdateFilms } = this.props
    const showSearch = checkedFilter ? (
      <SearchInput
        onUpdateFilms={(text) => {
          onUpdateFilms(text)
        }}
      />
    ) : null

    return (
      <header>
        <Filter onClickFilter={onClickFilter} />
        {showSearch}
      </header>
    )
  }
}
