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
          maxWidth: "900px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* إطار الشعار */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#FFD100",
              padding: "20px",
              borderRadius: "20px",
              display: "inline-block",
            }}
          >
            <img
              src="/images/MAAB LOGO-01.jpg"
              alt="MAAB Art Space"
              style={{
                width: "180px",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* النص */}
        <div>
          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 52px)",
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
                letterSpacing: "1px",
              }}
            >
              MAAB Art Space
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(22px, 3vw, 26px)",
              color: "#444",
              marginBottom: "28px",
              lineHeight: "1.6",
            }}
          >
            قريباً
            <br />
            <span
              style={{
                fontSize: "0.65em",
                color: "#777",
                letterSpacing: "2px",
              }}
            >
              Coming Soon
            </span>
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
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
              marginTop: "24px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Riyadh — Saudi Arabia
          </div>
        </div>
      </section>
    </main>
  );
}