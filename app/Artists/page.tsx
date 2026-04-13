export default function ArtistsPage() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الفنانون</h1>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {["artist1", "artist2", "mazin", "stuart", "ahmed", "redafarhan"].map(
          (artist) => (
            <div
              key={artist}
              style={{
                width: "260px",
                height: "340px",
                backgroundColor: "#f2d23b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={`/images/${artist}.jpg`}
                alt={artist}
                style={{ width: "72%" }}
              />
            </div>
          )
        )}
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
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#f2d23b";
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