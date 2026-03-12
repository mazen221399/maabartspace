export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* الصندوق الأصفر مع الشعار */}
        <div
          style={{
            background: "#FFD100",
            borderRadius: "28px",
            minHeight: "420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <img
            src="/images/MAAB LOGO-01.jpg"
            alt="MAAB Art Space"
            style={{
              width: "70%",
              maxWidth: "320px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* النص */}
        <div>
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              fontWeight: "bold",
              marginBottom: "14px",
              color: "#111",
            }}
          >
            MAAB ART SPACE
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 56px)",
              lineHeight: "1.4",
              margin: "0 0 18px 0",
              color: "#111",
            }}
          >
            مآب مساحة فنية
            <br />
            <span
              style={{
                fontSize: "0.55em",
                color: "#666",
              }}
            >
              MAAB Art Space
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "26px",
              maxWidth: "620px",
            }}
          >
             قريباً .
            <br />
            <span style={{ fontSize: "0.9em" }}>
              The website is currently under development and will launch soon.
            </span>
          </p>

          {/* الأزرار */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            <a
              href="/Contact"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                background: "#111",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "12px",
              }}
            >
              تواصل معنا
            </a>

            <a
              href="https://instagram.com/maab.artspace"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                background: "transparent",
                color: "#111",
                textDecoration: "none",
                border: "1px solid #111",
                borderRadius: "12px",
              }}
            >
              تابعنا على إنستجرام
            </a>
          </div>

          <div
            style={{
              borderTop: "1px solid #eee",
              paddingTop: "18px",
              color: "#888",
              fontSize: "14px",
              lineHeight: "1.8",
            }}
          >
            <div>Coming Soon</div>
            <div>Riyadh, Saudi Arabia</div>
          </div>
        </div>
      </section>
    </main>
  );
}