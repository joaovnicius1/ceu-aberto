import axios from "axios"

const apiKey = "4f345876399f46d3b9d162059260705"

export async function buscarClima(cidade) {

  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`
  )

  return response.data
}