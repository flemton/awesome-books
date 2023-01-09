const Books = [
  {
    title: "",
    author: "",
  },
  {
    title: "",
    author: "",
  },
  {
    title: "",
    author: "",
  },
  {
    title: "",
    author: "",
  },
  {
    title: "",
    author: "",
  },
];

const bookList = document.querySelector(".book-list");

Books.forEach((Books) => {
  const book = `
      <h5>
      ${Books.title}
      </h5>
      <p>
      ${Books.author}
      </p>
      <button onclick="removeBook(${Books.title}, ${Books.author})">Remove</button>
      <hr>
      `;
  bookList.innerHTML += book;
});

document.bookList.insertBefore(bookList, document.bookList.children[0]);

