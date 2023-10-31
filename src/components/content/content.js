import React, { Component } from 'react'

import FilmCard from '../film-card/film-card'
import Spinner from '../spinner/spinner'
import { GenresConsumer } from '../genres-context/genres-context'
export default class Content extends Component {
  render() {
    const { results, loading, guestSessionId, onChangeRate } = this.props
    const elements = results.map((elem) => {
      const { id, ...elemProps } = elem
      return (
        <FilmCard
          key={id + Math.random()}
          {...elemProps}
          loading={loading}
          guestSessionId={guestSessionId}
          movieId={id}
          onChangeRate={onChangeRate}
        />
      )
    })
    return <ul className="card-list">{elements}</ul>
  }
}
