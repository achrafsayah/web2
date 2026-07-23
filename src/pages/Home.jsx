import { Link } from "react-router-dom";
import books from "../data/books";
import BookCard from "../components/BookCard";

const shelfColors = [
  "#2E4635", "#7A3F2E", "#A9812F", "#4F6B54",
  "#23271F", "#7A3F2E", "#2E4635", "#4F6B54",
  "#A9812F", "#23271F", "#2E4635", "#7A3F2E",
];

export default function Home() {
  const featured = books.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Est. 1994 · Fernwood, since rebuilt in 2011</span>
            <h1>
              Books chosen <em>by hand</em>, one shelf at a time.
            </h1>
            <p className="lead">
              Fernwood Bindery is a small independent bookstore. We stock what
              we've actually read, host a standing-room poetry night on
              Thursdays, and rebind the odd paperback that's fallen apart from
              love.
            </p>
            <div className="btn-row">
              <Link to="/shop" className="btn">Browse the shop →</Link>
              <Link to="/about" className="btn btn-outline">Our story</Link>
            </div>
          </div>

          <div className="shelf-wrap" aria-hidden="true">
            <div className="shelf">
              {shelfColors.map((c, i) => (
                <div
                  key={i}
                  className="spine"
                  style={{
                    background: c,
                    height: `${58 + ((i * 37) % 42)}%`,
                  }}
                >
                  {books[i % books.length].author.split(" ")[1]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <span className="call-number">On the counter this week</span>
          <h2>Staff picks</h2>
        </div>
        <div className="book-grid">
          {featured.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>
    </>
  );
}
