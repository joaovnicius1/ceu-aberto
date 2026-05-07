import { useState } from "react";
import { buscarClima } from "./services/weatherApi";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);

  async function handleBuscarClima() {
    if (!cidade) return;

    const dados = await buscarClima(cidade);

    setClima(dados);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center">Céu Aberto 🌤️</h1>

        <p className="text-zinc-300 text-center mt-2">
          Veja o clima em qualquer cidade
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Digite uma cidade..."
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-blue-400 transition"
          />

          <button
            onClick={handleBuscarClima}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 transition rounded-2xl py-3 font-semibold cursor-pointer"
          >
            Buscar clima
          </button>

          {clima && (
            <div className="mt-8 text-center space-y-2">
              <h2 className="text-3xl font-bold">{clima.location.name}</h2>

              <p className="text-5xl font-bold">{clima.current.temp_c}°C</p>

              <p className="text-zinc-300">{clima.current.condition.text}</p>

              <div className="mt-4 text-sm text-zinc-400 space-y-1">
                <p>Sensação térmica: {clima.current.feelslike_c}°C</p>
                <p>Umidade: {clima.current.humidity}%</p>
                <p>Vento: {clima.current.wind_kph} km/h</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
