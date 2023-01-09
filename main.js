const Books = [
  {
    title: "Harry potter 1",
    author: "Hawkings",
  },
  {
    title: "Principia de mathimatica",
    author: "Isaac Newton",
  },
  {
    title: "Book 3",
    author: "Author 3",
  },
  {
    title: "Book 4",
    author: "Author 4",
  },
  {
    title: "Book 5",
    author: "Author",
  },
];

const storedBooks = localStorage.getItem('Books')

if (storedBooks)
{
    Books = JSON.parse('storedBooks');
}
else
{
    const storeBooks = JSON.stringify(Books);
    localStorage.setItem(Books, storeBooks);
}

const bookList = document.querySelector(".book-list");

Books.forEach((Books) => {
  const book = `
      <p>
      ${Books.title}
      </p>
      <p>
      ${Books.author}
      </p>
      <button onclick="removeBook(${Books.title}, ${Books.author})">Remove</button>
      <hr>
      `;
  bookList.innerHTML += book;
});

document.bookList.insertBefore(bookList, document.bookList.children[0]);

const formTitle = document.querySelector('#title');

const formAuthor = document.querySelector('#author');

const addButton = document.querySelector('#add-book');

function addBook(title, author) {
    Books.push({title: title, author: author });
  }




addButton.addEventListener('click', addBook(formTitle.value, formAuthor.value));