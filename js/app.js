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
        const content = document.createElement('div')
        const img = document.createElement('img')
        const bookTitle = document.createElement('h6')
        const author = document.createElement('p')
        const price = document.createElement('p')

        bookItem.className = 'book-item'
        content.className = 'book-item__content'
        bookTitle.classList = 'book-item__title'
        img.className = 'book-item__img'
        author.classList = 'book-item__author'
        price.classList = 'book-item__price'
        
        img.src = el.imageLink
        img.alt = el.title
        bookTitle.innerText = el.title
        author.innerText = el.author
        price.innerText = el.price
        
        content.appendChild(bookTitle)
        content.appendChild(author)
        content.appendChild(price)

        bookItem.appendChild(img)
        bookItem.appendChild(content)
        bookWrapper.appendChild(bookItem)
      });
    })
    .catch((err) => alert(err))

  main.appendChild(bookWrapper)
  body.appendChild(main)
}
createBookCatalog()