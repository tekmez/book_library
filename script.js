//selection
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
function Book() {
    this.title = title;
    this.author = author;
    this.page = page;
    this.info = function () {
        return (`${title} by ${author}, ${page} pages.`)
    }
}

function addBookToLibrary() {
    const b = new Book(title, author, page);
    mylibrary.push(b.info());
    return mylibrary;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    result.innerHTML = addBookToLibrary();
});