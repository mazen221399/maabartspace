export default function ArtistsPage() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الفنانون</h1>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        <div style={{ width: "320px" }}>
          <div
            style={{
              width: "320px",
              height: "420px",
              backgroundColor: "#f2d23b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginBottom: "15px",
            }}
          >
            <img
              src="/images/artist1.jpg"
              alt="artist1"
              style={{ width: "85%", height: "auto" }}
            />
          </div>
        </div>

        <div style={{ width: "320px" }}>
          <div
            style={{
              width: "320px",
              height: "420px",
              backgroundColor: "#f2d23b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginBottom: "15px",
            }}
          >
            <img
              src="/images/artist2.jpg"
              alt="artist2"
              style={{ width: "85%", height: "auto" }}
            />
          </div>
        </div>

        <div style={{ width: "320px" }}>
          <div
            style={{
              width: "320px",
              height: "420px",
              backgroundColor: "#f2d23b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginBottom: "15px",
            }}
          >
            <img
              src="/images/mazin.jpg"
              alt="mazin"
              style={{ width: "85%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "25px" }}>
        للتعرف عن قرب على فنانينا، الرجاء زيارة حسابنا في إنستجرام
      </p>

      <a
        href="https://instagram.com/maab.artspace"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 30px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        زيارة إنستجرام
      </a>
    </main>
  );
}