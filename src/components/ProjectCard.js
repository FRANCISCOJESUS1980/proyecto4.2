import './Projectcard.scss'

export function ProjectCard() {
  const card = document.createElement('article')
  card.className = 'card card--project'

  card.innerHTML = `
    <h2 class="card__title">Projects</h2>
    <div class="project">
      <img src="/assets/images.jpg/proyecto1.jpeg" alt="proyecto1" class="project__image">
      <div class="project__info">
        <h3 class="project__name">Project 1</h3>
        <p class="project__description">Descripción del proyecto 1.</p>
      </div>
    </div>
    <div class="project">
      <img src="/assets/images.jpg/proyecto2.jpeg" alt="proyecto2" class="project__image">
      <div class="project__info">
        <h3 class="project__name">Project 2</h3>
        <p class="project__description">Descripción del proyecto 2.</p>
      </div>
    </div>
    <div class="project">
      <img src="/assets/images.jpg/proyecto3.jpeg" alt="proyecto3" class="project__image">
      <div class="project__info">
        <h3 class="project__name">Project 3</h3>
        <p class="project__description">Descripción del proyecto 3.</p>
      </div>
    </div>
  `

  return card
}
