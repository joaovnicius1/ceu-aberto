export function getBackground(condition) {
  if (!condition) return "bg-zinc-950";

  const c = condition.toLowerCase();

  if (c.includes("sol") || c.includes("clear")) {
    return "bg-gradient-to-b from-yellow-400/30 via-orange-500/10 to-zinc-950";
  }

  if (c.includes("chuva") || c.includes("rain")) {
    return "bg-gradient-to-b from-blue-600/30 via-blue-900/20 to-zinc-950";
  }

  if (c.includes("nuvem") || c.includes("cloud")) {
    return "bg-gradient-to-b from-gray-400/20 via-zinc-800/20 to-zinc-950";
  }

  return "bg-zinc-950";
}

export function getGlow(condition) {
  if (!condition) return "";

  const c = condition.toLowerCase();

  if (c.includes("sol")) return "shadow-yellow-400/30";
  if (c.includes("chuva") || c.includes("rain")) return "shadow-blue-500/30";
  if (c.includes("nuvem")) return "shadow-gray-400/20";

  return "shadow-zinc-900";
}

export function getWeatherIcon(condition) {
  if (!condition) return "☁️";

  const c = condition.toLowerCase();

  if (c.includes("sun") || c.includes("sol") || c.includes("clear")) return "☀️";
  if (c.includes("rain") || c.includes("chuva") || c.includes("drizzle")) return "🌧️";
  if (c.includes("cloud") || c.includes("nublado") || c.includes("overcast") || c.includes("partly")) return "☁️";
  if (c.includes("snow")) return "❄️";
  if (c.includes("storm") || c.includes("thunder")) return "⛈️";

  return "🌤️";
}