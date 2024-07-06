import './ExperienceCard.scss'

export function ExperienceCard() {
  const card = document.createElement('article')
  card.className = 'card card--experience'

  card.innerHTML = `
    <h2 class="card__title">Experiences</h2>
    <div class="experience">
      <img src="/assets/images.jpg/logo tienda.jpg" alt="logo" class="experience__image">
      <div class="experience__info">
        <p class="experience__time">Enero 2000 - Current</p>
        <h3 class="experience__job">Gerente Mobiliario</h3>
        <p class="experience__description">Tengo varias tiendas de muebles y electrodomesticos desde el año 2000 a la actualidad y basicamente vendemos de todo para el hogar</p>
      </div>
    </div>
    <div class="experience">
      <img src="/assets/images.jpg/logopower.jpg" alt="logo" class="experience__image">
      <div class="experience__info">
        <p class="experience__time">Marzo 2024 - actualidad</p>
        <h3 class="experience__job">Estudiante ThePower</h3>
        <p class="experience__description">Desde el 27 de Marzo de 2024 estoy asistiendo a clases de programacion en un master online en una de las mejores empresas del mundo, donde te proporcionan unas herramientas y conocimientos para estar muy por encima de la media en este sector</p>
      </div>
    </div>
  `

  return card
}
