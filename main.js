window.addEventListener('DOMContentLoaded', () => {
  const booksLink = document.querySelector('.list');
  const formsLink = document.querySelector('.add-new');
  const contactsLink = document.querySelector('.contact-link');
  const booksPage = document.querySelector('.book-list');
  const formsPage = document.querySelector('.form');
  const contactsPage = document.querySelector('.contact');
  const booksTitle = document.querySelector('.books-head');
  formsPage.classList.add('hide');
  contactsPage.classList.add('hide');
  function showListOnly() {
    formsPage.classList.add('hide');
    contactsPage.classList.add('hide');
    booksPage.classList.remove('hide');
    booksTitle.classList.remove('hide');
  }
  booksLink.addEventListener('click', showListOnly);
  function showContactOnly() {
    booksPage.classList.add('hide');
    formsPage.classList.add('hide');
    booksTitle.classList.add('hide');
    contactsPage.classList.remove('hide');
  }
  contactsLink.addEventListener('click', showContactOnly);
  function showFormOnly() {
    booksPage.classList.add('hide');
    contactsPage.classList.add('hide');
    booksTitle.classList.add('hide');
    formsPage.classList.remove('hide');
  }
  formsLink.addEventListener('click', showFormOnly);
});
const date = new Date().toDateString();
document.getElementById('date').innerHTML = date;
const Books = JSON.parse(localStorage.getItem('Books')) || [];
const bookList = document.createElement('section');
bookList.className = 'book-list';
bookList.classList.add('show');
let bookIndex = 0;

Books.forEach((Books) => {
  let bookClass = 'bookContainer';
  if (bookIndex % 2 === 1) {
    bookClass = 'bookContainer1';
  }
  const book = `
    <div class="${bookClass}">
        <p>
        ${Books.title} by ${Books.author}
        </p>
        <button class="remove">Remove</button>
    </div>`;
  bookList.innerHTML += book;
  bookIndex += 1;
});

document.body.insertBefore(bookList, document.body.children[3]);

const addButton = document.querySelector('#add-book');
const removeButton = document.querySelectorAll('.remove');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook() {
    const formTitle = document.querySelector('#title');

    const formAuthor = document.querySelector('#author');
    const bbook = new Book(formTitle.value, formAuthor.value);
      Books.push(bbook);
      document.body.children[3].appendChild(`
      <div class="bookContainer">
      <p>
      ${formTitle.value} by ${formAuthor.value}
      </p>
      <button class="remove">Remove</button>
      </div>`);
      formAuthor.value = '';
      formTitle.value = '';
      localStorage.setItem('Books', JSON.stringify(Books));
  }

  static removeBook(e) {
    const bookTitle = (e.target.parentNode.children[0].innerHTML).split('by')[0].trim();
    const bookAuthor = (e.target.parentNode.children[0].innerHTML).split('by')[1].trim();
    for (let i = 0; i < Books.length; i += 1) {
        Books.splice(i, 1);
        localStorage.setItem('Books', JSON.stringify(Books));
        window.location.reload();
        break;
    }
  }
}
addButton.addEventListener('click', Book.addBook);
removeButton.forEach((element) => element.addEventListener('click', Book.removeBook));
