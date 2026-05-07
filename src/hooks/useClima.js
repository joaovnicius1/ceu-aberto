import { useState, useEffect } from "react";
import { buscarClima } from "../services/weatherApi";

export function useClima() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const [favoritos, setFavoritos] = useState(() => {
    try {
      const saved = localStorage.getItem("favoritos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } catch (err) {
      console.error("Erro ao salvar favoritos", err);
    }
  }, [favoritos]);

  async function fetchClima() {
    if (!cidade?.trim()) return;

    try {
      setLoading(true);
      setErro("");
      setClima(null);

      const data = await buscarClima(cidade);

      if (!data || !data.current) {
        throw new Error("Resposta inválida da API");
      }

      setClima(data);

    } catch (err) {
      setErro("Cidade não encontrada 😢");
      console.error("Erro fetchClima:", err);
    } finally {
      setLoading(false);
    }
  }

  return {
    cidade,
    setCidade,
    clima,
    loading,
    erro,
    fetchClima,
    favoritos,
    setFavoritos,
  };
}