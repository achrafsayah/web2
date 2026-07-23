import { useState, useMemo } from "react";
import books from "../data/books";
import BookCard from "../components/BookCard";

export default function Shop() {
  const [genre, setGenre] = useState("All");

  const genres = useMemo(
    () => ["All", ...new Set(books.map((b) => b.genre))],
    []
  );

  const filtered =
    genre === "All" ? books : books.filter((b) => b.genre === genre);

  return (
    <section className="container">
      <div className="section-head">
        <span className="call-number">The full shelf</span>
        <h1>Shop</h1>
        <p>Browse everything currently in stock, sorted by nothing in particular.</p>
      </div>

      <div className="btn-row" style={{ marginBottom: 34 }}>
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={g === genre ? "btn" : "btn btn-outline"}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="book-grid">
        {filtered.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
