import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books";

// This is our DYNAMIC page. The ":id" part in the route
// (see App.jsx) changes depending on which book was clicked.
function BookDetail() {
  // useParams() reads the "id" from the URL, e.g. /shop/3 -> id = "3"
  const { id } = useParams();

  // Find the book in our list that matches this id.
  // Note: id from the URL is a string, so we convert it to a number.
  const book = books.find((b) => b.id === Number(id));

  // If no book was found, show a simple message instead of crashing.
  if (!book) {
    return (
      <section className="container">
        <h1>Book not found</h1>
        <Link to="/shop" className="btn">
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="container">
      <Link to="/shop">← Back to Shop</Link>

      <div style={{ marginTop: "20px" }}>
        <div
          className="book-cover"
          style={{ backgroundColor: book.color, height: "220px", maxWidth: "300px" }}
        >
          {book.title}
        </div>

        <h1>{book.title}</h1>
        <p>by {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>{book.description}</p>
        <p className="price">${book.price.toFixed(2)}</p>

        <button className="btn">Add to Cart</button>
      </div>
    </section>
  );
}

export default BookDetail;
