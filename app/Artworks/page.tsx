"use client";

export default function ArtworksPage() {
  const artworks = [
    { file: "najdiat", name: "نجديات" },
    { file: "womenstrenth", name: "جبروت امرأة" },
    { file: "hadeethalbab", name: "حديث الباب" },
    { file: "ziyarah", name: "زيارة" },
    { file: "onfowan", name: "عنفوان امرأة" },
    { file: "mknonat", name: "مكنونات" },
  ];

  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الأعمال الفنية</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto 50px",
        }}
      >
        {artworks.map((art) => (
          <div
            key={art.file}
            style={{
              border: "2px solid #FEDD00",
              padding: "10px",
              borderRadius: "8px",
              background: "#fff",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={`/images/artworks/${art.file}.jpg`}
              alt={art.name}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "contain",
                background: "#fff",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />

            {/* اسم العمل */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                margin: 0,
              }}
            >
              {art.name}
            </p>
          </div>
        ))}
      </section>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "25px" }}>
        لمزيد من الأعمال، تابعنا على إنستجرام
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
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FEDD00";
          e.currentTarget.style.color = "#000";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#000";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        📸 Instagram account
      </a>
    </main>
  );
}