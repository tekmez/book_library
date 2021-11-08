const title = document.querySelector('#title');
const author = document.querySelector('#author');
const page = document.querySelector('#page');
const form = document.getElementById('form');
const result = document.querySelector('.result');

let mylibrary = [];

// Display Show
document.querySelector('.new').addEventListener('click', function form() {
    let x = document.getElementById('form');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

//Constructor
function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.info = function () {
        return (`${this.title} written by ${this.author}, ${this.page} pages.<br>`)
    }
}

function addBookToLibrary() {
    const titleValue = title.value;
    const authorValue = author.value;
    const pageValue = page.value;
    const b = new Book(titleValue, authorValue, pageValue);
    
    mylibrary.push(b.info());
    return mylibrary;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    result.innerHTML = addBookToLibrary();
    title.value = '';
    author.value = '';
    page.value = '';
});