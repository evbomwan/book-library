const library = [];

// object constructor
function Book(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
};

const book1 = new Book(
    "Lord of the rings",
    "Tolkien",
    "Thousands",
    true
);
const book2 = new Book(
    "Genesis",
    "Moses",
    "A few hundreds",
    true
);
library.push(book1);
library.push(book2);

// getting the subit button 
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", addBookToLibrary)

// add a new book to library
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
    displayBook();
};

// function for looping through the array and displays each book on the page
function displayBook() {
    const libraryContainer = document.getElementById("library")
    for (let i = 0; i < library.length; i++){
        const book = library[i];
        const card = document.createElement("div");
        card.classList.add("bookCard");
        card.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read ? "Read" : "Not read"}</p>`;
        libraryContainer.appendChild(card);
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        libraryContainer.appendChild(removeBtn);
    }
}