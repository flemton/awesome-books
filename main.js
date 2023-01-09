const Books = JSON.parse(localStorage.getItem('Books')) || [];


const bookList = document.createElement('section');
bookList.className = 'book-list';

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

document.body.insertBefore(bookList, document.body.children[1]);

const addButton = document.querySelector('#add-book');

function addBook() {
    let formTitle = document.querySelector('#title');

    let formAuthor = document.querySelector('#author');
    if (!formAuthor.value || !formTitle.value)
    {
        return;
    }

    else
    {
        Books.push({title: formTitle.value, author: formAuthor.value });

        localStorage.setItem('Books', JSON.stringify(Books));
        formAuthor.value = '';
        formTitle.value = '';
    }
  }

  function removeBook(title, author) {
    for (let i = 0; i < Books.length; i++)
        if (Books[i].title == title & Books[i].author == author)
        {
            Books.splice(i, 1);
        }
  }

addButton.addEventListener('click', addBook);

