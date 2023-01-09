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
        <button class="remove">Remove</button>
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
        location.reload()
    }
    
  }

 
      const removebtn = document.querySelectorAll(".remove");
      removebtn.forEach((element,i) => element.addEventListener("click", ()=> {
        Books.splice(i, 1);
        localStorage.setItem('Books', JSON.stringify(Books))
        location.reload()
      })) 

addButton.addEventListener('click', addBook);
