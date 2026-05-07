import { useClima } from "./hooks/useClima";
import { getBackground, getGlow } from "./utils/ClimaStyle";
import { ClimaCard } from "./components/ClimaCard";

function App() {
  const {
    cidade,
    setCidade,
    clima,
    loading,
    erro,
    fetchClima,
  } = useClima();

  const condition = clima?.current?.condition?.text;

  return (
    <main
      className={`min-h-screen text-white flex items-center justify-center px-6 transition-all duration-700 ${
        condition ? getBackground(condition) : "bg-zinc-950"
      }`}
    >
      <div
        className={`w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-700 ${
          condition ? getGlow(condition) : ""
        }`}
      >
        <h1 className="text-4xl font-bold text-center">
          Céu Aberto 🌤️
        </h1>

        <p className="text-zinc-300 text-center mt-2">
          Veja o clima em qualquer cidade
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Digite uma cidade..."
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchClima();
                e.target.blur();
              }
            }}
            className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-blue-400 transition"
          />

          <button
            onClick={fetchClima}
            disabled={loading}
            className={`w-full mt-4 rounded-2xl py-3 font-semibold transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Buscar clima
          </button>

          {loading && (
            <p className="mt-6 text-center text-zinc-300">
              Buscando clima...
            </p>
          )}

          {erro && (
            <p className="mt-6 text-center text-red-400">
              {erro}
            </p>
          )}

          {clima?.current && (
            <ClimaCard clima={clima} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;