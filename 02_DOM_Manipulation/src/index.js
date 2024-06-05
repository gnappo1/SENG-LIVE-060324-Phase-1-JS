//* BookStore has been moved to data.js
console.log(bookStore);

//* Code from previous lecture

function formatPrice(price) {
  return '$' + parseFloat(price).toFixed(2);
}

//* New code starts here

//! Global Variables

const h1Header = document.querySelector("header h1#store-name")
const h1HeaderTwo = document.getElementById("store-name")
const firstDivWithClassList = document.querySelector(".list")

//* Concepts
//! both return the first alleged DOM node that matched the selector
//* querySelector => TARGETS BY ANYTHING (id, class, position, data attributes)
const storeName = document.querySelector('#store-name') //! ids are targeted with a #
const list = document.querySelector('.list') //! classes are targeted with a .
//* getElementById => TARGETS ONLY BY ID (if present)
const storeNameWithGetElementById = document.getElementById('store-name') //! no need for #
const bookList = document.querySelector('#book-list')


//! innerText -> is also aware of style and will not return the text of hidden elements, whereas textContent will.
//! textContent -> gets the content of all elements, including <script> and <style> elements
//! innerHTML -> includes the HTML markup and deserves a special WARNING
//! [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext)

// TODO CRUD

// TODO 💡 Create a new DOM element of your choice and add it to the page

function addNodeToPage() {
  //! create a new node of any kind
  const span = document.createElement('span')
  span.id = "new-span"
  // span.className = "red"
  span.setAttribute("class", "red")
  //! add some text to that node
  span.innerText = "Hello World!"
  //! add the newly created el to the page
  header.appendChild(span) // ONLY ONE EL OF TYPE NODE
  // header.append(span, 'hello') // MULTIPLE ELEMENTS OF DIFFERENT TYPES
}
// addNodeToPage()

// TODO 💡 Create a function that sets the text content of the header to the bookstore name.
function updateHeaderOnLoad() {
  h1Header.textContent = bookStore.name
}

updateHeaderOnLoad()
// TODO 💡 Create a function that grabs all the divs from the footer and render the bookstore name, address, and hours
function addFooterInfo() {
  const allDivs = Array.from(document.querySelectorAll('footer > div'))
  allDivs.forEach(div => {
    div.innerText = bookStore[div.id]
  })
}

addFooterInfo()
// TODO 💡 Remove an element of your choice from the DOM
function removeElFromDom() {
  const header = document.getElementById('store-name')
  header.remove()
}

// TODO 💡 Exercise After Break
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering 
// that book and insert it into our webpage!

// should create an li element that looks something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
//   <button>Delete</button>
// </li>

function renderBookAsHTML(book) {
  bookList.innerHTML += `
    <li class="list-li">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${formatPrice(book.price)}</p>
      <img src=${book.imageUrl} alt=${book.title} />
      <button>Delete</button>
    </li>
  `
}

// Array.for each book use my renderBookAsHTML function
// bookStore.inventory.forEach(function(book){renderBookAsHTML(book)})
// bookStore.inventory.forEach(book => renderBookAsHTML(book))
bookStore.inventory.forEach(renderBookAsHTML)
console.log("🚀 ~ bookStore.inventory:", bookStore.inventory)
