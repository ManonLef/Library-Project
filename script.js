const myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const libraryBook = new Book(title, author, pages, read);
  myLibrary.push(libraryBook);
}

function addElementToCard(element, bookCard, book) {
  const elementDiv = document.createElement("div");
  elementDiv.className = `book-${element}`;
  let bookElement;
  if (element === "title") {
    bookElement = document.createTextNode(book[element]);
  } else {
    bookElement = document.createTextNode(`${element}: ${book[element]}`);
  }
  elementDiv.appendChild(bookElement);
  bookCard.appendChild(elementDiv);
}

function addReadStatusToCard(bookCard) {
  const statusDiv = document.createElement("div");
  statusDiv.className = "book-status";
  statusDiv.textContent = "Read Status:";
  bookCard.appendChild(statusDiv);
}

function addReadButtonToCard(index, book, bookCard) {
  const statusButton = document.createElement("button");
  statusButton.setAttribute("data-index", index);
  if (book.read === "true") {
    statusButton.textContent = "read";
    statusButton.className = "read-button";
  } else {
    statusButton.textContent = "not read";
    statusButton.className = "read-button not-read-button";
  }
  bookCard.appendChild(statusButton);
}

function displayBooks() {
  // first erase previous list
  const bookContainer = document.getElementById("books-container");
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }

  // loop through and display book info
  myLibrary.forEach((book, index) => {
    // create book card
    const bookCard = document.createElement("div");
    bookCard.className = "bookcard";
    // fill bookcard
    addElementToCard("title", bookCard, book);
    addElementToCard("author", bookCard, book);
    addElementToCard("pages", bookCard, book);
    addReadStatusToCard(bookCard);
    addReadButtonToCard(index, book, bookCard);

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-index", index);
    deleteButton.className = "delete-button";
    deleteButton.textContent = "✖";
    bookCard.appendChild(deleteButton);
    // result bookcard
    document.getElementById("books-container").appendChild(bookCard);
  });
}

function unhideForm() {
  if (document.querySelector(".form-container").hasAttribute("hidden")) {
    document.getElementById("books-container").className = "blur";
    document.querySelector("footer").className = "blur";
    document.querySelector("header").className = "blur";
    document.querySelector(".form-container").removeAttribute("hidden");
  } else {
    hideForm();
    clearForm();
  }
  changeBookButton();
}

function hideForm() {
  document.getElementById("books-container").classList.remove("blur");
  document.querySelector("footer").classList.remove("blur");
  document.querySelector("header").classList.remove("blur");
  document.querySelector(".form-container").setAttribute("hidden", "");
}

// button to add book
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", unhideForm);

// submit new book button functionality
const submitButton = document.getElementById("submit-book");
submitButton.addEventListener("click", submitBook);

function submitBook(event) {
  event.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayBooks();
  // reset form
  document.querySelector("form").reset();
  hideForm();
  changeBookButton();
}

function toggleRead(bookProto) {
  const readState = myLibrary[bookProto.getAttribute("data-index")].read;
  if (readState === "false") {
    myLibrary[bookProto.getAttribute("data-index")].read = "true";
  } else {
    myLibrary[bookProto.getAttribute("data-index")].read = "false";
  }
  displayBooks();
}

function removeBook(bookProto) {
  myLibrary.splice(bookProto.getAttribute("data-index"), 1);
  displayBooks();
}

// test for delete button
document.addEventListener("click", (e) => {
  const target = e.target.closest(".delete-button");
  if (target) {
    removeBook(target);
  }
});

// same for read toggle
document.addEventListener("click", (e) => {
  const target = e.target.closest(".read-button");
  if (target) {
    toggleRead(target);
  }
});

function changeBookButton() {
  if (document.querySelector(".form-container").hasAttribute("hidden")) {
    document.getElementById("add-book").textContent = "Add Book";
  } else {
    document.getElementById("add-book").textContent = "Cancel";
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}
// temporary check to see if function works and fill the myLibrary array to test other functions

addBookToLibrary("The Lord of The Rings", "author 1", 111, "true");
addBookToLibrary(
  "How To Win Friends And Influence People",
  "author 2",
  222,
  "false"
);
addBookToLibrary("book 1", "Very Long Author Papasididopoulos", 111, "true");
addBookToLibrary("book 2", "author 2", 222, "false");
addBookToLibrary("book 1", "author 1", 111, "true");
addBookToLibrary("book 2", "author 2", 222, "false");
addBookToLibrary("book 1", "author 1", 111, "true");
addBookToLibrary("book 2", "", "", "false");
displayBooks();
