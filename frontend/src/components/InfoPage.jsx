import { Link } from "react-router-dom";
import "./FirstPage.css";
import "./InfoPage.css";
import Header from "./Header";
import Footer from "./Footer";

function InfoPage({ title, content }) {
  return (
    <div className="info-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="info-content">
        <h1>{title}</h1>

        <p className="info-text">{content}</p>

        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default InfoPage;