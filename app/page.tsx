export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#fff" }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "40px",
          alignItems: "center",
          padding: "70px 60px",
          minHeight: "80vh",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              color: "#111",
              marginBottom: "18px",
              fontWeight: "bold",
            }}
          >
            MAAB ARTSPACE
          </p>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.2",
              marginBottom: "24px",
            }}
          >
            مآب
            <br />
            مساحة للفن
            <br />
            والتجربة والإبداع
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: "#666",
              maxWidth: "650px",
              lineHeight: "1.9",
              marginBottom: "30px",
            }}
          >
            مآب مساحة فنية معاصرة تُعنى بعرض وتسويق الأعمال الفنية المتميزة،
            وإبراز الفنانين، وتنظيم المعارض والورش الفنية والثقافية المتخصصة.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/Artworks" style={primaryButton}>
              استكشف الأعمال
            </a>


          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "560px",
            background: "#FFD100",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          <div
  style={{
    width: "100%",
    height: "560px",
    borderRadius: "24px",
    overflow: "hidden",
  }}
>
  <img
  src="/images/MAAB LOGO-01.jpg"
  alt="Maab Artspace"
  style={{
    width: "75%",
    height: "75%",
    objectFit: "contain",
    display: "block",
    margin: "auto",
  }}
/>
</div>
        </div>
      </section>

      <section
        style={{
          padding: "0 60px 70px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: "30px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "2px",
                color: "#111",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              FEATURED
            </p>

            <h2
              style={{
                fontSize: "36px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
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

      <section
        style={{
          padding: "0 60px 80px 60px",
        }}
      >
        <div
          style={{
            background: "#fafafa",
            border: "1px solid #eee",
            borderRadius: "24px",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            لماذا مآب؟
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              maxWidth: "900px",
              marginBottom: "0",
            }}
          >
            يجمع مآب بين عرض الأعمال الفنية، وتنظيم الورش المتخصصة، وفتح مساحات
            للتعاون مع الفنانين والمبدعين، ضمن تجربة معاصرة تعكس جودة المحتوى
            الفني وثراء المشهد الثقافي.
          </p>
        </div>
      </section>
    </main>
  );
}

const primaryButton = {
  display: "inline-block",
  padding: "14px 22px",
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "12px",
};

const secondaryButton = {
  display: "inline-block",
  padding: "14px 22px",
  background: "transparent",
  color: "#111",
  textDecoration: "none",
  border: "1px solid #111",
  borderRadius: "12px",
};

const viewAllLink = {
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};

const artCard = {
  border: "1px solid #eee",
  borderRadius: "20px",
  padding: "18px",
  background: "#fff",
};

const artImage = {
  width: "100%",
  height: "260px",
  borderRadius: "16px",
  background: "#f3f3f3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
  marginBottom: "16px",
};

const artTitle = {
  margin: "0 0 8px 0",
  fontSize: "22px",
};

const artMeta = {
  margin: 0,
  color: "#666",
};