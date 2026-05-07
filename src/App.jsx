function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

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
            className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-blue-400 transition"
          />

          <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 transition rounded-2xl py-3 font-semibold cursor-pointer">
            Buscar clima
          </button>
        </div>

      </div>

    </main>
  )
}

export default App