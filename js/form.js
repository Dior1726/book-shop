const body = document.querySelector('body')
const header = document.createElement('header')
const main = document.createElement('main')
const container = document.createElement('div')

header.className = 'header'
container.className = 'container'
main.className = 'main container'

function createHeader() {
  const logo = document.createElement('h1')
  const welcomeText = document.createElement('p')
  const links = document.createElement('div')
  const cartLink = document.createElement('a')
  const cartIcon = document.createElement('i')
  const storeLink = document.createElement('a')
  const storeIcon = document.createElement('i')

  logo.innerText = 'Book-Shop'
  welcomeText.innerText = 'Welcome to amazing book shop!'
  links.className = 'header-links'
  cartLink.href = '/bag.html'
  cartLink.className = 'link'
  cartIcon.className = 'bx bx-cart'
  storeLink.href = '/index.html'
  storeLink.className = 'link'
  storeIcon.className = 'bx bx-store-alt'
  
  storeLink.appendChild(storeIcon)
  cartLink.appendChild(cartIcon)
  links.appendChild(storeLink)
  links.appendChild(cartLink)
  container.appendChild(logo)
  container.appendChild(welcomeText)
  container.appendChild(links)
  header.appendChild(container)
  body.appendChild(header)
}
createHeader()