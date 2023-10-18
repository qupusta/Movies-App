import React, { Component } from 'react'

import FilmCard from '../film-card/film-card'

export default class Content extends Component {
  render() {
    const { results } = this.props
    const elements = results.map((elem) => {
      const { id, ...elemProps } = elem
      return <FilmCard key={id} {...elemProps} />
    })
    return <ul className="card-list">{elements}</ul>
  }
}
