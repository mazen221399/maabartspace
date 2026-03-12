export default function ArtworksPage() {
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
          الأعمال الفنية
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#444",
            lineHeight: "1.7",
          }}
        >
          قريباً
          <br />
          <span
            style={{
              fontSize: "0.7em",
              color: "#777",
              letterSpacing: "2px",
            }}
          >
            Coming Soon
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