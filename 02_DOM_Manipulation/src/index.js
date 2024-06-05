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

function displayStoreNameOnPage() {
  h1Header.textContent = bookStore.name
}

displayStoreNameOnPage()

//* Concepts

//* querySelector => // TARGET THE FIRST MATCH
//* getElementById => // TARGET THE FIRST MATCH

// textContent gets the content of all elements, including < script > and < style > elements.In contrast, innerText only shows "human-readable" elements.
// textContent returns every element in the node.In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext

//* innerHTML =>

// const classNameUsed = document.getElementsByClassName("list") => HTMLCollection (cannot use forEach, map, etc)
// const querySelectorAllUsed = document.querySelectorAll("div.list") => NodeList (can use forEach, no map etc)

// Array.from(classNameUsed) => now rather than a HTMLCollection we have a true array
// Array.from(querySelectorAllUsed) => now rather than a NodeList we have a true array

// TODO CRUD

// TODO 💡 Create a new DOM element of your choice and add it to the page
function addSpanToPage() {
  const newSpan = document.createElement("span") // it returns a new Node object

  newSpan.id = "hours"
  newSpan.setAttribute("class", "information")

  newSpan.innerText = bookStore.hours

  const banner = document.querySelector("#banner")

  // banner.append(newSpan, 5, "hello")
  banner.appendChild(newSpan)
}

addSpanToPage()
// TODO 💡 Create a function that sets the text content of the header to the bookstore name.

// TODO 💡 Create a function that grabs all the divs from the footer and render the bookstore name, address, and hours

// TODO 💡 Remove an element of your choice from the DOM
function removeFooterFromPage() {
  document.querySelector('footer').remove()
}

// removeFooterFromPage()
// TODO 💡 Exercise After Break
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering 
// that book and insert it into our webpage!
const bookList = document.querySelector("#book-list")

function renderBookAsHTML(bookObj) {
  // target the place where the book will appear
  // Dynamically append in there each book's representation
  bookList.innerHTML += `
    <li class="list-li">
      <h3>${bookObj.title}</h3>
      <p>${bookObj.author}</p>
      <p>${formatPrice(bookObj.price)}</p>
      <img src=${bookObj.imageUrl} alt=${bookObj.title}/>
      <button>Delete</button>
    </li>
  `
}

// Array.for each book use my renderBookAsHTML function
// bookStore.inventory.forEach(function(book){renderBookAsHTML(book)})
// bookStore.inventory.forEach(book => renderBookAsHTML(book))
bookStore.inventory.forEach(renderBookAsHTML)