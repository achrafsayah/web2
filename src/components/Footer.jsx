export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Fernwood Bindery — Independent Bookstore</span>
        <span>121 Harrow Lane, Fernwood · Open Tue–Sun, 10:00–19:00</span>
      </div>
    </footer>
  );
}
