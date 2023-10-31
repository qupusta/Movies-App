import React, { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'

import { ServiceProvider } from '../service-context'
import Content from '../content/content'
import Header from '../header/header'
import Service from '../../service/service'
import IsLoaded from '../is-loaded/is-loaded'
import ErrorIndicator from '../error-indicator/error-indicator'
import OfflineDescription from '../offline-description/offline-description'
import PaginationTab from '../pagination/pagination'
import { GenresProvider, GenresConsumer } from '../genres-context/genres-context'

export default class App extends Component {
  service = new Service()

  state = {
    results: [],
    ratedMovies: [],
    loadingRateMovies: true,
    error: null,
    page: null,
    totalPages: null,
    textParam: null,
    totalResults: null,
    loading: true,
    checkedFilter: true,
    guestSessionId: null,
    genres: [],
  }

  onChangeRate = (id, value) => {
    this.setState(({ results }) => {
      const idx = results.findIndex((el) => el.id === id)
      const oldItem = results[idx]
      const newItem = { ...oldItem, rating: value }
      const newArray = [...results.slice(0, idx), newItem, ...results.slice(idx + 1)]
      return {
        results: newArray,
      }
    })
  }

  onUpdateFilms = (text = '', page) => {
    this.service
      .getResource(text, page)
      .then((res) => {
        this.setState(() => {
          return {
            totalResults: res['total_results'],
            textParam: text,
            results: res['results'],
            page: res['page'],
            totalPages: res['total_pages'],
            loading: false,
          }
        })
      })
      .catch((err) => {
        this.setState(() => {
          return {
            error: err,
            loading: true,
          }
        })
      })
  }

  onClickFilter = (key) => {
    if (key === '1') {
      this.setState({ checkedFilter: true })
    } else {
      this.getRatedMovies()
      this.setState({ checkedFilter: false })
    }
  }

  async getSessionId() {
    const id = await this.service.createGuestSession()
    this.setState({ guestSessionId: id })
  }

  getRatedMovies() {
    if (this.state.guestSessionId) {
      this.service
        .getRatedMovies(this.state.guestSessionId)
        .then((res) => {
          this.setState(() => {
            return {
              ratedMovies: res['results'],
              loadingRateMovies: false,
            }
          })
        })
        .catch((err) => {
          this.setState(() => {
            return {
              error: err,
              loadingRateMovies: true,
            }
          })
        })
    }
  }

  componentDidMount() {
    this.getSessionId()
    this.service.getGenres().then((res) => {
      this.setState(() => {
        return {
          genres: res.genres,
        }
      })
    })
  }

  render() {
    const {
      results,
      error,
      page,
      totalPages,
      textParam,
      totalResults,
      loading,
      checkedFilter,
      guestSessionId,
      ratedMovies,
      genres,
    } = this.state
    if (error) {
      return <ErrorIndicator error={error} />
    }

    const isResults =
      !results.length && textParam ? (
        <IsLoaded />
      ) : (
        <Content
          results={checkedFilter ? results : ratedMovies}
          loading={loading}
          guestSessionId={guestSessionId}
          onChangeRate={this.onChangeRate}
        />
      )

    const showPagination = totalResults ? (
      <PaginationTab page={page} totalPages={totalPages} onUpdateFilms={this.onUpdateFilms} text={textParam} />
    ) : null

    return (
      <GenresProvider value={genres}>
        <div className="container">
          <Header onUpdateFilms={this.onUpdateFilms} onClickFilter={this.onClickFilter} checkedFilter={checkedFilter} />
          <Online>{isResults}</Online>
          {checkedFilter ? showPagination : <PaginationTab page={page} totalPages={ratedMovies.total_pages} />}
          <Offline>
            <OfflineDescription />
          </Offline>
        </div>
      </GenresProvider>
    )
  }
}
