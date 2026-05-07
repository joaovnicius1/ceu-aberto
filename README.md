🌤️ Céu Aberto

Um app simples e bonito para consultar o clima de qualquer cidade em tempo real.
Feito com React + Vite + Tailwind, consumindo a API da WeatherAPI.

🚀 Sobre o projeto

A ideia aqui foi treinar consumo de API, estados no React e organização de código em hooks e componentes.

Além disso, também quis deixar a interface mais “viva”, mudando o fundo e os ícones conforme o clima da cidade pesquisada.

🧠 O que o app faz
Busca o clima de qualquer cidade
Mostra temperatura, sensação térmica, umidade e vento
Ícones dinâmicos de acordo com o clima
Fundo muda conforme o tempo (sol, chuva, nuvem etc.)
Salva cidades favoritas no localStorage
Feedback de loading e erro
🛠️ Tecnologias usadas
React
Vite
Tailwind CSS
Axios
WeatherAPI
localStorage
📁 Organização do projeto

O projeto foi separado de forma simples:

hooks/ → lógica do clima (useClima)
components/ → componentes visuais (card do clima)
services/ → requisição da API
utils/ → funções de estilo (ícones, fundo, glow)