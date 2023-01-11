
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

document.body.insertBefore(bookList, document.body.children[2]);

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
    if (formAuthor.value && formTitle.value) {
      Books.push(bbook);

      localStorage.setItem('Books', JSON.stringify(Books));
      formAuthor.value = '';
      formTitle.value = '';
      window.location.reload();
    }
  }

  static removeBook(e) {
    const bookTitle = (e.target.parentNode.children[0].innerHTML).split('by')[0].trim();
    const bookAuthor = (e.target.parentNode.children[0].innerHTML).split('by')[1].trim();
    for (let i = 0; i < Books.length; i += 1) {
      if (Books[i].title === bookTitle && Books[i].author === bookAuthor) {
        Books.splice(i, 1);
        localStorage.setItem('Books', JSON.stringify(Books));
        window.location.reload();
        break;
      }
    }
  }
}
addButton.addEventListener('click', Book.addBook);
removeButton.forEach((element) => element.addEventListener('click', Book.removeBook));
