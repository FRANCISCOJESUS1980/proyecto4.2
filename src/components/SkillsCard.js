import './SkillsCard.scss'

export function SkillsCard() {
  const card = document.createElement('article')
  card.className = 'card card--skills'

  card.innerHTML = `
    <h2 class="card__title">Skills</h2>
    <ul class="skills__list">
      <li class="skills__item">HTML</li>
      <li class="skills__item">CSS</li>
      <li class="skills__item">JavaScript</li>
      <li class="skills__item">React</li>
      <li class="skills__item">Node.js</li>
    </ul>
  `

  return card
}
