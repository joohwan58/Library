let library = document.querySelector('.content');
console.log(library);

function Book(title, author, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.hasBeenRead = hasBeenRead;
}

Book.prototype.getElement = function () {
    const book = document.createElement('div');
    book.classList.add('book');
    const title = document.createElement('h2');
    title.textContent = this.title;
    book.appendChild(title);
    const author = document.createElement('p');
    author.classList.add('author');
    author.textContent = this.author;
    book.appendChild(author);
    // need to add checkmark and button
    return book;
}

let test = new Book('naruto', 'kishimoto', true)
library.appendChild(test.getElement()); 