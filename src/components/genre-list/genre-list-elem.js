import React, { Component } from 'react'
import './genre-list-elem.css'

export default class GenreListElem extends Component {
  render() {
    const { genreIds, genres } = this.props
    const genreEl = genreIds.map((item) => {
      const genreName = genres.find((label) => {
        if (label.id === item) return label['name']
      })
      return (
        <li key={item}>
          <a href="#" className="genre-link">
            {genreName.name}
          </a>
        </li>
      )
    })

    return genreEl
  }
}
