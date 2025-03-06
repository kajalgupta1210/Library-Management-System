async function fetchBooks() {
    const response = await fetch('/books');
    const books = await response.json();
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

document.querySelector('.add-book-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const newBook = { title, author };

    await fetch('/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
    });

    fetchBooks(); // Refresh the book list
});

// Call fetchBooks on page load
fetchBooks();
