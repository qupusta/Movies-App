import React, { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'

import Content from '../content/content'
import Header from '../header/header'
import Service from '../../service/service'
import IsLoaded from '../is-loaded/is-loaded'
import ErrorIndicator from '../error-indicator/error-indicator'
import OfflineDescription from '../offline-description/offline-description'

export default class App extends Component {
  service = new Service()

  state = {
    results: [],
    loading: true,
    error: null,
  }

  onUpdateFilms = (text) => {
    if (text.length !== 0) {
      this.service
        .getResource(text)
        .then((res) => {
          this.setState(() => {
            return {
              results: res,
              loading: false,
            }
          })
        })
        .catch((err) => {
          this.setState(() => {
            return {
              error: err,
              loading: false,
            }
          })
        })
    }
  }

  constructor() {
    super()
    this.onUpdateFilms
  }

  render() {
    const { results, loading, error } = this.state
    if (error) {
      return <ErrorIndicator error={error} />
    }
    const isResults = !results.length && !loading ? <IsLoaded /> : <Content results={results} />

    return (
      <div className="container">
        <Header onUpdateFilms={this.onUpdateFilms} />
        <Online>{isResults}</Online>
        <Offline>
          <OfflineDescription />
        </Offline>
      </div>
    )
  }
}
