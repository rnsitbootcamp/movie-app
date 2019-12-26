const apiKey ="1ae83ca4d8a91826db50f652ef3e24de"; 
// process.env.REACT_APP_TMDB_KEY

export const getSearchResult = async (url, query = '', parameters = '') => {
  const endpoint = url + apiKey + parameters + query

  try {
    const data = await fetch(endpoint)

    if (data.status === 200) {
      const result = await data.json()
      return result
    }

    return data
  }
  catch (err) {
    return err
  }
}