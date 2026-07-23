import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/shop/${book.id}`} className="book-card">
      <div className="book-cover" style={{ background: book.color }}>
        {book.title}
      </div>
      <div className="book-card-body">
        <span className="eyebrow">{book.genre}</span>
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author}</span>
        <span className="book-price">${book.price.toFixed(2)}</span>
      </div>
    </Link>
  );
}
