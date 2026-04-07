export default function ArtistsPage() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px" }}>الفنانون</h1>

      {/* الفنان الأول */}
      <div
        style={{
          width: "320px",
          height: "420px",
          margin: "0 auto 40px",
          backgroundColor: "#f2d23b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/artist1.jpg"
          alt="artist1"
          style={{ width: "85%", height: "auto" }}
        />
      </div>

      {/* رابط انستجرام */}
      <p style={{ marginBottom: "60px" }}>
        للتعرف أكثر على الفنان، يرجى زيارة{" "}
        <a
          href="https://instagram.com/maab.artspace"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          إنستجرام
        </a>
      </p>

      {/* الفنان الثاني */}
      <div
        style={{
          width: "320px",
          height: "420px",
          margin: "0 auto 40px",
          backgroundColor: "#f2d23b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/artist2.jpg"
          alt="artist2"
          style={{ width: "85%", height: "auto" }}
        />
      </div>

      {/* رابط انستجرام */}
      <p>
        للتعرف أكثر على الفنان، يرجى زيارة{" "}
        <a
          href="https://instagram.com/maab.artspace"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          إنستجرام
        </a>
      </p>
    </main>
  );
}