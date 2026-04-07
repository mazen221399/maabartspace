export default function ArtistsPage() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px" }}>الفنانون</h1>

      {/* مربع الصورة */}
      <div
        style={{
          width: "320px",
          height: "420px",
          margin: "0 auto",
          backgroundColor: "#f2d23b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/artist1.jpg"
          alt="artist"
          style={{
            width: "85%",
            height: "auto",
          }}
        />
      </div>

      {/* النص + الرابط */}
      <p style={{ marginTop: "25px", lineHeight: "1.8" }}>
        للتعرف أكثر على الفنان، يرجى زيارة حسابنا على{" "}
        <a
          href="https://instagram.com/maab.artspace"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", fontWeight: "bold" }}
        >
          إنستجرام
        </a>
      </p>
    </main>
  );
}
