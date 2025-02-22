export async function callApi() {
  const response = await fetch(`https://disease.sh/v3/covid-19/countries`)
  const data = await response.json()
  return data
}

export async function callApiByCountry(country) {
  const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  const data = await response.json()
  return data
}

