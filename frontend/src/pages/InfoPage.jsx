import { Link } from "react-router-dom";

function InfoPage({ title, content }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "20px",
          lineHeight: "1.8",
        }}
      >
        {content}
      </p>

      <Link
        to="/"
        style={{
          marginTop: "30px",
          textDecoration: "none",
          background: "#16a085",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default InfoPage;