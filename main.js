const Books = JSON.parse(localStorage.getItem('Books')) || [];
const bookList = document.createElement('section');
bookList.className = 'book-list';

Books.forEach((Books) => {
  const book = `
  <div class="bookContainer">
        <p>
        ${Books.title} By ${Books.author}
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
  const bookTitle=(e.target.parentNode.children[0].innerHTML).split('By')[0].trim()
  const bookAuthor =(e.target.parentNode.children[0].innerHTML).split('By')[1].trim()
  for(let i=0;i<Books.length;i++){
  {if (Books[i].title == bookTitle && Books[i].author == bookAuthor){
Books.splice(i,1);
localStorage.setItem('Books', JSON.stringify(Books));
  window.location.reload();
  break;
  }}
}
}

}
addButton.addEventListener('click', Book.addBook);
removeButton.forEach((element, i) => element.addEventListener('click', Book.removeBook,))

