export default function ArtistsPage() {

  const artists = [
    {
      name: "أحمد علي",
      bio: "فنان تشكيلي مهتم بالخط العربي المعاصر واستكشاف جماليات الحرف.",
      artworks: ["لوحة النور", "انسجام الحروف", "مداد"]
    },
    {
      name: "سارة خالد",
      bio: "نحاتة سعودية تعمل على تحويل المفاهيم التراثية إلى أشكال معاصرة.",
      artworks: ["صمت الحجر", "تكوين", "جذور"]
    },
    {
      name: "محمد سالم",
      bio: "فنان معاصر يستكشف العلاقة بين اللون والفراغ في أعماله.",
      artworks: ["تجريد ١", "تجريد ٢"]
    }
  ];

  return (
    <main style={{ padding: "60px", fontFamily: "sans-serif" }}>

      <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
        فنانو مآب
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "30px"
        }}
      >

        {artists.map((artist, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "16px",
              padding: "25px"
            }}
          >

            <div
              style={{
                width: "100%",
                height: "180px",
                background: "#eee",
                borderRadius: "10px",
                marginBottom: "15px"
              }}
            />

            <h2 style={{ marginBottom: "10px" }}>
              {artist.name}
            </h2>

            <p style={{ color: "#666", marginBottom: "15px" }}>
              {artist.bio}
            </p>

            <strong>الأعمال المتوفرة:</strong>

            <ul style={{ marginTop: "10px", paddingRight: "18px" }}>
              {artist.artworks.map((work, i) => (
                <li key={i}>{work}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </main>
  );
}
