// const getResource = async (queryParam) => {
//   const url = `https://api.themoviedb.org/3/search/movie?query=${queryParam}&api_key=7209e6153bea2e4002d7863f9bb22fa1`
//   const options = { method: 'GET', headers: { accept: 'application/json' } }

//   const res = await fetch(url, options)
//   if (!res.ok) {
//     throw new Error('Could not fetch')
//   }

//   const body = await res.json()
//   const result = await body['results']
//   return await result
// }

// export default getResource

export default class Service {
  _apiBase = 'https://api.themoviedb.org/3/search/movie?query='
  _apiKey = '&api_key=7209e6153bea2e4002d7863f9bb22fa1'

  async getResource(queryParam) {
    const options = { method: 'GET', headers: { accept: 'application/json' } }
    const res = await fetch(`${this._apiBase}${queryParam}${this._apiKey}`, options)
    if (!res.ok) {
      throw new Error('Could not fetch.')
    }

    const body = await res.json()
    const result = await body['results']
    if (!result.length) return []
    return await result
  }
}
