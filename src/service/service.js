export default class Service {
  _apiBase = 'https://api.themoviedb.org/3/'
  _apiKey = '&api_key=7209e6153bea2e4002d7863f9bb22fa1'
  _accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjA5ZTYxNTNiZWEyZTQwMDJkNzg2M2Y5YmIyMmZhMSIsInN1YiI6IjY1MjNmNjY5ZWE4NGM3MDBhZWVmNDlmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cH0IVGEzUaJOafcRGC4bRiutpLddLxVUaCivvxyqLXo'

  async getData(url) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }

    const res = await fetch(`${url}${this._apiKey}`, options)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Status: ${res.status}`)
    }

    return res
  }
  async getResource(queryParam, page = 1) {
    const result = await this.getData(`${this._apiBase}/search/movie?query=${queryParam}&page=${page}`)
    return result.json()
  }

  async createGuestSession() {
    const res = await this.getData(`${this._apiBase}authentication/guest_session/new?${this._apiKey}`)

    const result = await res.json()
    const sessionId = result.guest_session_id
    return sessionId
  }

  async getGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=7209e6153bea2e4002d7863f9bb22fa1'
    const options = { method: 'GET', headers: { accept: 'application/json' } }

    const response = await fetch(url, options).then((res) => res.json())
    return response
  }

  async postRate(guestSessionId, movieId, rating) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=7209e6153bea2e4002d7863f9bb22fa1&guest_session_id=${guestSessionId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        // eslint-disable-next-line prettier/prettier, quotes
        body: JSON.stringify({ value: rating }),
      }
    )
    return response
  }

  async getRatedMovies(guestSessionId) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=7209e6153bea2e4002d7863f9bb22fa1`,
      options
    ).then((res) => res.json())
    return res
  }
}
