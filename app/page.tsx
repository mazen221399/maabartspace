export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#fff" }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
          padding: "40px 20px",
          minHeight: "80vh",
        }}
      >
        {/* النص */}
        <div style={{ order: 2 }}>
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              color: "#111",
              marginBottom: "14px",
              fontWeight: "bold",
            }}
          >
            MAAB ART SPACE
          </p>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              lineHeight: "1.4",
              marginBottom: "20px",
              marginTop: 0,
            }}
          >
            مآب
            <br />
            مساحة فنية
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#666",
              maxWidth: "600px",
              lineHeight: "1.9",
              marginBottom: "28px",
            }}
          >
            مآب مساحة فنية معاصرة تُعنى بعرض وتسويق الأعمال الفنية المتميزة،
            وإبراز الفنانين، وتنظيم المعارض والورش الفنية والثقافية المتخصصة.
          </p>

          <a href="/Artworks" style={primaryButton}>
            استكشف الأعمال
          </a>
        </div>

        {/* الصورة */}
        <div
          style={{
            width: "100%",
            minHeight: "320px",
            background: "#FFD100",
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            order: 1,
          }}
        >
          <img
            src="/images/MAAB LOGO-01.jpg"
            alt="Maab Artspace"
            style={{
              width: "65%",
              maxWidth: "300px",
              height: "auto",
              objectFit: "contain",
              display: "block",
              margin: "auto",
            }}
          />
        </div>
      </section>

      {/* الأعمال */}
      <section style={{ padding: "0 20px 60px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                marginBottom: "6px",
                fontWeight: "bold",
              }}
            >
              FEATURED
            </p>

            <h2
              style={{
                fontSize: "clamp(24px,4vw,30px)",
                margin: 0,
              }}
            >
              أحدث الأعمال
            </h2>
          </div>

          <a href="/Artworks" style={viewAllLink}>
            عرض جميع الأعمال
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={artCard}>
            <div style={artImage}>عمل فني</div>
            <h3 style={artTitle}>تكوين بصري</h3>
            <p style={artMeta}>فن معاصر</p>
          </div>

          <div style={artCard}>
            <div style={artImage}>عمل فني</div>
            <h3 style={artTitle}>مداد</h3>
            <p style={artMeta}>خط عربي</p>
          </div>

          <div style={artCard}>
            <div style={artImage}>عمل فني</div>
            <h3 style={artTitle}>جذور</h3>
            <p style={artMeta}>منحوتات</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const primaryButton = {
  display: "inline-block",
  padding: "12px 20px",
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "10px",
};

const viewAllLink = {
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};

const artCard = {
  border: "1px solid #eee",
  borderRadius: "18px",
  padding: "16px",
  background: "#fff",
};

const artImage = {
  width: "100%",
  height: "220px",
  borderRadius: "14px",
  background: "#f3f3f3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
  marginBottom: "14px",
};

const artTitle = {
  margin: "0 0 6px 0",
  fontSize: "20px",
};

const artMeta = {
  margin: 0,
  color: "#666",
};
