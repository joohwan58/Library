let library = document.querySelector('.content');

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
    const interaction = document.createElement('div');
    interaction.classList.add('interaction');
    const readForm = document.createElement('div');
    readForm.classList.add('read-form');
    const img = document.createElement('img');
    img.classList.add('checkbox');
    if (this.hasBeenRead) {
        img.src = 'checkbox-check-svgrepo-com.svg';
    } else {
        img.src = 'checkbox-unchecked-svgrepo-com.svg';
    }
    //add checkbox event listener
    readForm.appendChild(img);
    const label = document.createElement('span');
    label.classList.add('label');
    label.textContent = 'Has been read';
    readForm.appendChild(label);
    interaction.appendChild(readForm);
    const button = document.createElement('button');
    button.classList.add('remove');
    button.type = 'button'
    button.textContent = 'Remove';
    //add button event listener
    interaction.appendChild(button);
    book.appendChild(interaction);
    return book;
}

let newBook = new Book('naruto', 'kishimoto', true);
console.log(library);
library.appendChild(newBook.getElement())

const test = document.querySelector('.book');
test.children[2].children[0].children[0].addEventListener('click', function () {//long property chain calls img element
    this.src = 'checkbox-check-svgrepo-com.svg';
})
