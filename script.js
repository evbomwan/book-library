const library = [];

// object constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// grabbing the book details
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");


// handle all submit functions
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

// add a new book to library
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
}

// function for looping through the array and displays each book on the page
function displayBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.textContent = "";

  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const card = document.createElement("div");
    card.classList.add("bookCard");
    // adding the id to each book
    card.dataset.id = book.id;
    card.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read ? "Read" : "Not read"}</p>`;
    libraryContainer.appendChild(card);
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click",()=>{
        removeBook(book.id);
    } );
    libraryContainer.appendChild(removeBtn);
  }
}

// remove book from library and display

function removeBook(bookId){
    const index = library.findIndex(book => book.id === bookId);
    if (index !== -1){
        library.splice(index, 1)
    }
    displayBooks();
}

// handleSubmit function
function handleSubmit(event) {
    // prevent defaukt form function
    event.preventDefault();
    // getting the values
const title = titleInput.value;
const author = authorInput.value;
const pages = pagesInput.value;
const read = readInput.checked;
addBookToLibrary(title, author, pages, read);
displayBooks();
titleInput.value = "";
authorInput.value = "";
pagesInput.value = "";
readInput.checked = false;
// closing the dialog
dialog.close()
}

// controlling the dialog 
const dialog = document.getElementById("my-dialog");
const openBtn = document.getElementById("newBookBtn");

openBtn.addEventListener("click", ()=>{
    dialog.showModal();
})
