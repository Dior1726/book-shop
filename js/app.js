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

function createBookCatalog() {
  const bookWrapper = document.createElement('div')
  const catalogTitle = document.createElement('h2')
  
  catalogTitle.className = 'title'
  bookWrapper.className = 'book-wrapper'

  catalogTitle.innerText = 'Our Catalog'

  booksList.forEach((el) => {
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

    desctiptionBtn.addEventListener('click', () => {
      createDescriptionModal(el)
    })

    addToCartBtn.addEventListener('click', () => {
      addToCart(el)
    })
    
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
  })
  
  main.appendChild(catalogTitle)
  main.appendChild(bookWrapper)
  body.appendChild(main)
}
createBookCatalog()

function createDescriptionModal(book) {
  const wrapper = document.createElement('div')
  const modal = document.createElement('div')  
  const modalHeader = document.createElement('header')
  const modalContent = document.createElement('div')
  const closeBtn = document.createElement('button')

  wrapper.className = 'modal-wrapper'
  modal.className = 'modal'
  modalHeader.className = 'modal-header'
  modalContent.className = 'modal-content'
  closeBtn.className = 'button close'

  modalHeader.innerText = book.title
  modalContent.innerText = book.description
  closeBtn.innerText = 'Close'

  closeBtn.addEventListener('click', hideModal)

  modal.appendChild(modalHeader)
  modal.appendChild(modalContent)
  modal.appendChild(closeBtn)
  wrapper.appendChild(modal)
  body.appendChild(wrapper)
}

function hideModal() {
  const modal = document.querySelector('.modal-wrapper')
  modal.remove()
}

function addToCart(el) {
  let books = localStorage.getItem('books') 
          
  if (books) {
    books = JSON.parse(books)
    
    if (books.filter(b => b.id === el.id).length > 0) {
      alert('This book is exist')
    } else {
      books.push(el)
      localStorage.setItem('books', JSON.stringify(books))
    }
  } else {
    books = [el]
    localStorage.setItem('books', JSON.stringify(books))
  }
}