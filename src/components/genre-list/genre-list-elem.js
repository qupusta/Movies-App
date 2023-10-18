import React, { Component } from 'react'
import './genre-list-elem.css'

export default class GenreListElem extends Component {
  render() {
    const { genre } = this.props
    const genreEl = genre.map((item) => {
      return (
        <li key={item}>
          <a href="#" className="genre-link">
            {item}
          </a>
        </li>
      )
    })

    return genreEl
  }
}
