/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import React, { Component } from 'react'
import { format } from 'date-fns'

import RateStars from '../rate-stars/rate-stars'
import GenreListElem from '../genre-list/genre-list-elem'
import RateEllipse from '../rate-ellipse/rate-ellipse'
import Spinner from '../spinner/spinner'
import './film-card.css'

export default class FilmCard extends Component {
  convertDate(releaseDate) {
    let date = new Date(releaseDate)
    const stringDate = `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}`
    const parsedDate = new Date(stringDate)
    let convertedDate

    if (!isNaN(parsedDate)) {
      convertedDate = format(parsedDate, 'MMMM d, yyyy')
      return convertedDate
    }
  }

  kitcut(text) {
    text = text.split(' ')
    if (text.length < 30) return text.join(' ')
    return text.slice(0, 34).join(' ') + '...'
  }

  render() {
    const { title, release_date, overview, genre_ids, vote_average, poster_path, loading } = this.props
    const posterUrl = 'https://image.tmdb.org/t/p/original'
    const poster = posterUrl + poster_path

    const convertedDate = this.convertDate(release_date)

    const imgPoster = <img className="poster" src={poster} alt={title} />
    if (loading) {
      return (
        <div className="card">
          <Spinner />
        </div>
      )
    }

    return (
      <div className="card">
        {poster_path === null ? <Spinner /> : imgPoster}
        <div className="card-info">
          <RateEllipse rate={vote_average} />
          <h2> {title} </h2>
          <h3>{convertedDate}</h3>
          <ul className="genre-list">
            <GenreListElem genre={genre_ids} />
          </ul>
          <p>{this.kitcut(overview)}</p>
          <RateStars rate={vote_average} />
        </div>
      </div>
    )
  }
}
