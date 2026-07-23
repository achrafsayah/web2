import React from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

// This is the Shop page - it shows every book we have.
function Shop() {
  return (
    <section className="container">
      <h1>Shop</h1>
      <p>Here are all the books available in our store.</p>

      <div className="book-grid">
        {books.map((book) => (
          <Link to={`/shop/${book.id}`} key={book.id} className="book-card">
            <div className="book-cover" style={{ backgroundColor: book.color }}>
              {book.title}
            </div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>{book.genre}</p>
            <p className="price">${book.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Shop;
