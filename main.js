const Books = JSON.parse(localStorage.getItem('Books')) || [];
const bookList = document.createElement('section');
bookList.className = 'book-list';

Books.forEach((Books) => {
  const book = `
  <div>
        <p>
        ${Books.title}
        </p>
        <p>
        ${Books.author}
        </p>
        <button class="remove">Remove</button>
        <hr>
        </div>`;
  bookList.innerHTML += book;
});

document.body.insertBefore(bookList, document.body.children[1]);

const addButton = document.querySelector('#add-book');
const removeButton = document.querySelectorAll('.remove');
console.log(removeButton)

class Book {
  constructor(title,author){
    this.title =title;
    this.author = author;
  }
  static addBook() {
  const formTitle = document.querySelector('#title');

  const formAuthor = document.querySelector('#author');
  console.log(formAuthor)
  const bbook = new Book(formTitle.value,formAuthor.value)
  console.log(bbook)
  if (formAuthor.value && formTitle.value) {
    Books.push(bbook);

    localStorage.setItem('Books', JSON.stringify(Books));
    formAuthor.value = '';
    formTitle.value = '';
    window.location.reload();
  }
}

static removeBook(e){
  console.log(e.target.parentNode)
}

}
addButton.addEventListener('click', Book.addBook);
removeButton.forEach((element, i) => element.addEventListener('click', Book.removeBook))

