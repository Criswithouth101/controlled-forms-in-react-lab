import { useState } from 'react';

const BookShelf = () => {

  const [books, setBooks] = useState([
    { title: 'The Bitch', author: 'Pilar Quintana' },
    { title: 'Death in Venice', author: 'Thomas Mann' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newBook.title.trim() || !newBook.author.trim()) return;
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        <h3>My Books:</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <strong>{book.title}</strong> by {book.author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
