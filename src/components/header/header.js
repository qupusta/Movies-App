import React, { Component } from 'react'

import './header.css'

import SearchInput from '../search-input/search-input'

export default class Header extends Component {
  render() {
    return (
      <header>
        <SearchInput
          onUpdateFilms={(text) => {
            this.props.onUpdateFilms(text)
          }}
        />
      </header>
    )
  }
}
