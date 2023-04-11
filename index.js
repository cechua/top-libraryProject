let myLibrary = [
    {
        title:'Test',
        author:'Author',
        pages:'2',
        isRead:true,
    },
    {
        title:'Test2',
        author:'Author',
        pages:'2',
        isRead:true,
    },
    {
        title:'Test3',
        author:'Author',
        pages:'2',
        isRead:true,
    },
];

const booksGrid = document.getElementById('books-grid')
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");

function Book(title,author,pages,isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}


function addBookToLibrary() {
  // do stuff here
  const newBook = new Book(title.value,author.value,pages.value,isRead.checked)
  myLibrary.push(newBook);
  displayBooks();
  clearForm();
}

function removeBookFromLibrary(i) {
    myLibrary.splice(i,1);
    displayBooks();
}

function toggleRead(i) {
    myLibrary[i].isRead = !myLibrary[i].isRead;
    displayBooks();
}

function displayBooks() {
    let listofBooksHTML = ''
    listofBooksHTML = myLibrary.map((book,i) => 
       `<tr> 
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button onClick="toggleRead(${i})">${book.isRead ? 'Read' : 'To Read'}</td>
            <td><button onClick="removeBookFromLibrary(${i})">Remove</button></td>
       </tr>`
    )

    booksGrid.innerHTML = listofBooksHTML.join('')
}

function submitForm() {
    addBookToLibrary();
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;
}

displayBooks();