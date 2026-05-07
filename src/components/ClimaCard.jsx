import { getWeatherIcon } from "../utils/ClimaStyle"

export function ClimaCard({ clima }) {
 if (!clima?.current) return null;

  return (
    <div className="mt-8 text-center space-y-2 animate-fade-in">

      <h2 className="text-3xl font-bold">
        {clima.location.name}
      </h2>

      <div className="text-6xl">
        {getWeatherIcon(clima.current.condition.text)}
      </div>

      <p className="text-5xl font-bold">
        {clima.current.temp_c}°C
      </p>

      <p className="text-zinc-300">
        {clima.current.condition.text}
      </p>

      <div className="mt-4 text-sm text-zinc-400 space-y-1">
        <p>Sensação térmica: {clima.current.feelslike_c}°C</p>
        <p>Umidade: {clima.current.humidity}%</p>
        <p>Vento: {clima.current.wind_kph} km/h</p>
      </div>

    </div>
  )
}