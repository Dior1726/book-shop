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
  cartLink.href = './bag.html'
  cartLink.className = 'link'
  cartIcon.className = 'bx bx-cart'
  storeLink.href = './index.html'
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
  let books = localStorage.getItem('books')
  books = JSON.parse(books)

  catalogTitle.className = 'title'
  bookWrapper.className = 'book-wrapper'
  catalogTitle.innerText = 'Your Orders'

  if (books.length) {
    books.forEach(el => {
      const bookItem = document.createElement('div')
      const content = document.createElement('div')
      const img = document.createElement('img')
      const bookTitle = document.createElement('h6')
      const author = document.createElement('p')
      const price = document.createElement('p')
      const action = document.createElement('div')
      const deleteBtn = document.createElement('button')
      const trashIcon = document.createElement('i')

      bookItem.className = 'book-item'
      bookItem.dataset.id = el.id
      content.className = 'book-item__content'
      bookTitle.classList = 'book-item__title'
      img.className = 'book-item__img'
      author.classList = 'book-item__author'
      price.classList = 'book-item__price'
      action.className = 'book-item__action'
      deleteBtn.className = 'button book-item__delete'
      trashIcon.className = 'bx bx-trash'

      deleteBtn.addEventListener('click', () => {
        deleteFromCart(el.id)
      })

      img.src = el.imageLink
      img.alt = el.title
      bookTitle.innerText = el.title
      author.innerText = el.author
      price.innerText = `Price: $${el.price}`

      deleteBtn.appendChild(trashIcon)
      action.appendChild(deleteBtn)
      content.appendChild(bookTitle)
      content.appendChild(author)
      content.appendChild(price)
      content.appendChild(action)

      bookItem.appendChild(img)
      bookItem.appendChild(content)
      bookWrapper.appendChild(bookItem)
    });
  } else {
    bookWrapper.append('You dont have any orders yet!')
  }

  main.appendChild(catalogTitle)
  main.appendChild(bookWrapper)
  body.appendChild(main)
}
createBookCatalog()

function deleteFromCart(id) {
  let books = localStorage.getItem('books')
  let bookItem = document.querySelector(`[data-id="${id}"]`)

  books = JSON.parse(books)
  books = books.filter((el) => el.id !== id)
  localStorage.setItem('books', JSON.stringify(books))
  bookItem.remove()
  calculateTotal()
}

function createTotalBlock() {
  const totalWrapper = document.createElement('div')
  const total = document.createElement('div')
  const orderBtn = document.createElement('a')

  totalWrapper.className = 'total-wrapper'
  total.className = 'total'
  orderBtn.className = 'button order-btn'
  orderBtn.href = './form.html'

  total.innerText = `Total: $0`
  orderBtn.innerText = 'Order'

  totalWrapper.appendChild(total)
  totalWrapper.appendChild(orderBtn)
  main.appendChild(totalWrapper)
}
createTotalBlock()

function calculateTotal() {
  let total = document.querySelector('.total')
  let books = localStorage.getItem('books')
  books = JSON.parse(books)
  if (books.length) {
    let sum = books.map((b) => b.price).reduce((prev, curr) => prev + curr)
    total.innerText = `Total: $${sum}`
  } else {
    total.innerText = 'Total: $0'
  }
}
calculateTotal()