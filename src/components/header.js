import './Header.scss'

export function Header() {
  const header = document.createElement('header')
  header.className = 'header'

  header.innerHTML = `
    <div class="switches">
      <div id="toggle-theme" class="toggle-theme">
        <img id="toggle-icon" src="./assets/icons.svg/moon.svg" alt="icon theme" class="toggle-theme__icon" />
        <p id="toggle-text" class="toggle-theme__text">Dark Mode</p>
      </div>
    </div>
    <div id="toggle-colors" class="colors">
      <div data-color="hsl(214, 84%, 56%)" class="colors__item colors__item--blue"></div>
      <div data-color="hsl(150, 84%, 56%)" class="colors__item colors__item--green"></div>
      <div data-color="hsl(276, 84%, 56%)" class="colors__item colors__item--purple"></div>
      <div data-color="hsl(46, 84%, 56%)" class="colors__item colors__item--orange"></div>
    </div>
  `

  return header
}
