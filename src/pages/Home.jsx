import React from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

// This is the Home page - the first page visitors see.
function Home() {
  // We only show the first 3 books here as "featured" books.
  const featuredBooks = books.slice(0, 3);

  return (
    <div>
      <div className="hero">
        <h1>Welcome to My Bookstore</h1>
        <p>Find your next favorite book from our small collection.</p>
        <Link to="/shop" className="btn">
          Browse Books
        </Link>
      </div>

      <section className="container">
        <h2>Featured Books</h2>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <Link to={`/shop/${book.id}`} key={book.id} className="book-card">
              <div className="book-cover" style={{ backgroundColor: book.color }}>
                {book.title}
              </div>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p className="price">${book.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
