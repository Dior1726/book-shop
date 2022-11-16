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
  const catalogTitle = document.createElement('h2')
  
  catalogTitle.className = 'title'
  bookWrapper.className = 'book-wrapper'

  catalogTitle.innerText = 'Our Catalog'

  getBooks()
    .then((res) => {
      res.forEach(el => {
        const bookItem = document.createElement('div')
        const content = document.createElement('div')
        const img = document.createElement('img')
        const bookTitle = document.createElement('h6')
        const author = document.createElement('p')
        const price = document.createElement('p')
        const action = document.createElement('div')
        const desctiptionBtn = document.createElement('button')
        const addToCartBtn = document.createElement('button')

        bookItem.className = 'book-item'
        content.className = 'book-item__content'
        bookTitle.classList = 'book-item__title'
        img.className = 'book-item__img'
        author.classList = 'book-item__author'
        price.classList = 'book-item__price'
        action.className = 'book-item__action'
        desctiptionBtn.className = 'button book-item__description'
        addToCartBtn.className = 'button book-item__add'
        
        img.src = el.imageLink
        img.alt = el.title
        bookTitle.innerText = el.title
        author.innerText = el.author
        price.innerText = `Price: $${el.price}`
        desctiptionBtn.innerText = 'Show more'
        addToCartBtn.innerText = 'Add'

        action.appendChild(desctiptionBtn)
        action.appendChild(addToCartBtn)
        
        content.appendChild(bookTitle)
        content.appendChild(author)
        content.appendChild(price)
        content.appendChild(action)

        bookItem.appendChild(img)
        bookItem.appendChild(content)
        bookWrapper.appendChild(bookItem)
      });
    })
    .catch((err) => alert(err))
  
  main.appendChild(catalogTitle)
  main.appendChild(bookWrapper)
  body.appendChild(main)
}
createBookCatalog()