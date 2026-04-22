export default function ArtistsPage() {
  const artists = [
    "mazin2",
    "stuart",
    "ahmed",
    "redafarhan",
    "dina",
    "tajliat", // ← هنا تجليات (بنعدل الصورة تحت)
    "artist1",
    "artist2",
  ];

  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الفنانون</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {artists.map((artist) => {
          // 👇 هنا التعديل المهم
          const imageSrc =
            artist === "tajliat"
              ? "/images/t3.jpg"
              : `/images/${artist}.jpg`;

          return (
            <div
              key={artist}
              style={{
                border: "2px solid #f2d23b",
                padding: "6px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={imageSrc}
                alt={artist}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}