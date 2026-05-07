import { useState } from "react"
import { buscarClima } from "../services/weatherApi"

export function useClima() {
  const [cidade, setCidade] = useState("")
  const [clima, setClima] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState("")

  async function fetchClima() {
    if (!cidade) return

    try {
      setLoading(true)
      setErro("")
      setClima(null)

      const data = await buscarClima(cidade)
      setClima(data)

    } catch {
      setErro("Cidade não encontrada 😢")
    } finally {
      setLoading(false)
    }
  }

  return {
    cidade,
    setCidade,
    clima,
    loading,
    erro,
    fetchClima
  }
}