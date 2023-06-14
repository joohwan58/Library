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
    img.addEventListener('click', () => {
        if (this.hasBeenRead) {
            img.src = 'checkbox-unchecked-svgrepo-com.svg';
            this.hasBeenRead = false;
        } else {
            img.src = 'checkbox-check-svgrepo-com.svg';
            this.hasBeenRead = true;
        }
    })
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
    button.addEventListener('click', () => {
        library.removeChild(book);
    })
    interaction.appendChild(button);
    book.appendChild(interaction);
    return book;
}

let formReadToggle = false;
const formCheckbox = document.querySelector('form img');
formCheckbox.addEventListener('click', () => {
    if (formReadToggle) {
        formCheckbox.src = 'checkbox-unchecked-svgrepo-com.svg';
        formReadToggle = false;
    } else {
        formCheckbox.src = 'checkbox-check-svgrepo-com.svg';
        formReadToggle = true;
    }
});

const form = document.querySelector('form');

const hideElement = function (element) {
    library.removeChild(element);
}

const showElement = function (element) {
    library.appendChild(element);
}

const titleForm = document.querySelector('#title');
const authorForm = document.querySelector('#author');
const cancelButton = document.querySelector('.button.cancel');
const addButton = document.querySelector('.add');
const submitButton = document.querySelector('.button.submit');

cancelButton.addEventListener('click', () => {
    hideElement(form);
    showElement(addButton);
});
let submitForm = function (event) {
    let valid = form.checkValidity();
    form.reportValidity();
    if (valid) {
        let title = titleForm.value;
        let author = authorForm.value;
        let newBook = new Book(title, author, formReadToggle);
        library.appendChild(newBook.getElement());
        form.reset();
        formCheckbox.src = 'checkbox-unchecked-svgrepo-com.svg';
        hideElement(form);
        showElement(addButton);
    }
    event.preventDefault();
}
submitButton.addEventListener('click', submitForm, false);

addButton.addEventListener('click', () => {
    showElement(form);
    hideElement(addButton);
})