export default function EnglishArtworksPage() {
  return (
    <main style={main}>
      <div style={box}>
        <h1 style={title}>Artworks</h1>
        <p style={coming}>Coming Soon</p>
        <div style={line} />
      </div>
    </main>
  );
}

const main = {
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
  padding: "40px 20px",
  fontFamily: "sans-serif",
};

const box = { maxWidth: "700px" };
const title = { fontSize: "clamp(32px,5vw,44px)", marginBottom: "18px" };
const coming = { fontSize: "22px", color: "#444", lineHeight: "1.7" };
const line = {
  marginTop: "30px",
  width: "120px",
  height: "6px",
  background: "#FFD100",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "10px",
};