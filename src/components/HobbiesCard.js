import './HobbiesCard.scss'

export function HobbiesCard() {
  const card = document.createElement('article')
  card.className = 'card card--hobbies'

  card.innerHTML = `
    <h2 class="card__title">Hobbies</h2>
    <div class="hobby">
      <img src="/assets/images.jpg/volar.jpg" alt="volar" class="hobby__image">
      <div class="hobby__info">
        <p class="hobby__description">Me gusta volar en parapente y explorar nuevos lugares desde el aire.</p>
      </div>
    </div>
    <div class="hobby">
      <img src="/assets/images.jpg/tiro.jpg" alt="tiro" class="hobby__image">
      <div class="hobby__info">
        <p class="hobby__description">Disfruto del tiro con arco y la precisión que requiere este deporte.</p>
      </div>
    </div>
    <div class="hobby">
      <img src="/assets/images.jpg/fortnite.jpg" alt="fortnite" class="hobby__image">
      <div class="hobby__info">
        <p class="hobby__description">Soy aficionado a los videojuegos, especialmente a Fortnite.</p>
      </div>
    </div>
    <div class="hobby">
      <img src="/assets/images.jpg/crosfit.JPG" alt="crosfit" class="hobby__image">
      <div class="hobby__info">
        <p class="hobby__description">Practico CrossFit para mantenerme en forma y desafiarme físicamente.</p>
      </div>
    </div>
  `

  return card
}
