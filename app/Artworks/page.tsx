import Link from "next/link";

export default function ArtworksPage() {
  return (
    <main style={{ padding: "60px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        الأعمال الفنية
      </h1>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        تصفح أقسام الأعمال الفنية في مآب.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "20px",
        }}
      >
        <Link href="/Artworks/Painting">
          <div style={card}><h3>فن تشكيلي</h3></div>
        </Link>

        <Link href="/Artworks/Sculpture">
          <div style={card}><h3>منحوتات</h3></div>
        </Link>

        <Link href="/Artworks/Calligraphy">
          <div style={card}><h3>خط عربي</h3></div>
        </Link>

        <Link href="/Artworks/Contemporary">
          <div style={card}><h3>فن معاصر</h3></div>
        </Link>

        <Link href="/Artworks/Classical">
          <div style={card}><h3>أعمال كلاسيكية</h3></div>
        </Link>
      </div>
    </main>
  );
}

const card = {
  border: "1px solid #e5e5e5",
  padding: "40px",
  borderRadius: "16px",
  cursor: "pointer",
};
