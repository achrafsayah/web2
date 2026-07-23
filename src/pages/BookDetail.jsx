import { useParams, Link } from "react-router-dom";
import books from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <section className="container">
        <h1>Book not found</h1>
        <p>We couldn't find that title on the shelf.</p>
        <Link to="/shop" className="btn">← Back to shop</Link>
      </section>
    );
  }

  return (
    <section className="container">
      <Link to="/shop" className="eyebrow">← Back to shop</Link>
      <div className="detail-grid" style={{ marginTop: 24 }}>
        <div className="detail-cover" style={{ background: book.color }}>
          {book.title}
        </div>
        <div>
          <span className="tag">{book.genre}</span>
          <h1>{book.title}</h1>
          <p className="book-author" style={{ fontSize: "1rem", marginBottom: 18 }}>
            by {book.author}
          </p>
          <p style={{ maxWidth: "58ch" }}>{book.blurb}</p>

          <div style={{ margin: "26px 0" }} className="call-number">
            Call number: {book.callNumber}
          </div>

          <div className="btn-row" style={{ alignItems: "center" }}>
            <span className="book-price" style={{ fontSize: "1.2rem", paddingTop: 0 }}>
              ${book.price.toFixed(2)}
            </span>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
