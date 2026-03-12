export default function ArtistsPage() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "clamp(32px,5vw,44px)",
            marginBottom: "18px",
          }}
        >
          الفنانون
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.9",
          }}
        >
          نخبة من الفنانين قيد الظهور، ترقبونا.
          <br />
          <span
            style={{
              fontSize: "0.9em",
              color: "#777",
            }}
          >
            A curated group of artists will be featured soon. Stay tuned.
          </span>
        </p>

        <div
          style={{
            marginTop: "30px",
            width: "120px",
            height: "6px",
            background: "#FFD100",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </main>
  );
}