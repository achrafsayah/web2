export default function About() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="call-number">Since 1994</span>
        <h1>About Fernwood Bindery</h1>
        <p>
          We opened as a two-room shop above a hardware store and moved to
          our current storefront on Harrow Lane in 2011, after a small fire
          made the decision for us. Everything on our shelves has been read
          by someone who works here — that's the only rule we've kept for
          thirty years.
        </p>
      </div>

      <div className="about-list">
        <div className="about-item">
          <span className="call-number">01</span>
          <div>
            <h3>How we choose books</h3>
            <p>
              No algorithm, no bestseller lists. Our five booksellers each
              read constantly and bring in what they can't stop talking
              about. If we haven't read it, we don't shelve it.
            </p>
          </div>
        </div>

        <div className="about-item">
          <span className="call-number">02</span>
          <div>
            <h3>Thursday poetry nights</h3>
            <p>
              Every Thursday at 7:30pm we clear the front tables for an open
              mic. No sign-up sheet — just show up and put your name on the
              chalkboard.
            </p>
          </div>
        </div>

        <div className="about-item">
          <span className="call-number">03</span>
          <div>
            <h3>Repairs and rebinding</h3>
            <p>
              We keep a small bindery in the back room for paperbacks that
              have earned a second spine. Bring in anything falling apart
              from too much love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
