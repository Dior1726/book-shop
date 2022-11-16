const body = document.querySelector('body')
const header = document.createElement('header')
const main = document.createElement('main')
const container = document.createElement('div')

header.className = 'header'
container.className = 'container'
main.className = 'main container'

async function getBooks() {
  const response = await fetch('../book.json')
  
  if (!response.ok) {
    return new Error(`Bad request! Status ${response.status}`)
  }
  const data = await response.json()
  return data
}

function createHeader() {
  const logo = document.createElement('h1')
  const welcomeText = document.createElement('p')

  logo.innerText = 'Book-Shop'
  welcomeText.innerText = 'Welcome to amazing book shop!'
  
  container.appendChild(logo)
  container.appendChild(welcomeText)
  header.appendChild(container)
  body.appendChild(header)
}
createHeader()

function createBookCatalog() {
  const bookWrapper = document.createElement('div')
  
  bookWrapper.className = 'book-wrapper'

  getBooks()
    .then((res) => {
      res.forEach(el => {
        const bookItem = document.createElement('div')
        const img = document.createElement('img')
        const bookTitle = document.createElement('h6')

        bookItem.className = 'book-item'
        bookTitle.classList = 'book-item__title'
        img.className = 'book-item__img'
        
        bookTitle.innerText = el.title
        img.src = el.imageLink
        img.alt = el.title
        
        bookItem.appendChild(img)
        bookItem.appendChild(bookTitle)
        bookWrapper.appendChild(bookItem)
      });
    })
    .catch((err) => alert(err))

  main.appendChild(bookWrapper)
  body.appendChild(main)
}
createBookCatalog()