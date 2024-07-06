import './ProfileCard.scss'

export function ProfileCard() {
  const card = document.createElement('article')
  card.className = 'card card--profile'

  card.innerHTML = `
    <div class="card__image-container">
      <img src="/assets/images.jpg/perfil.jpg" alt="perfil" />
    </div>
    <div class="card__header">
      <h2 class="card__title no-margin">FranciscoDesings</h2>
      <p class="card__subtitle">Estudiante THEPOWER</p>
    </div>
    <div class="card__body">
      <div class="card__link">
        <i class="fas fa-envelope icon"></i>
        <a href="mailto:francisco@hotmail.com">francisco@hotmail.com</a>
      </div>
      <div class="card__link">
        <i class="fas fa-phone-alt icon"></i>
        <a href="tel:+3412345678">+34-12345678</a>
      </div>
      <p class="card__text">
        Mas de 25 años como empresario en el sector del mobiliario y decoracion, pero desde hace 4 meses estoy estudiando un Master en programacion en la empresa THE POWER, siempre he destacado por mi constancia y cumplir mis objetivos, ahora me he marcado este y espero estar a la altura de lo que se me pide
      </p>
    </div>
  `

  return card
}
