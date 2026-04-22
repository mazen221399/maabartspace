import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#ffffff",
          color: "#111",
        }}
      >
        {/* TOP LINE */}
        <div style={{ height: "6px", backgroundColor: "#e5c94c" }} />

        {/* HEADER */}
        <header
          style={{
            padding: "28px 40px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {/* LOGO TEXT */}
            <div
              style={{
                fontSize: "26px",
                fontWeight: 600,
                letterSpacing: "2px",
              }}
            >
              MAAB
            </div>

            {/* NAV */}
            <nav
              style={{
                display: "flex",
                gap: "28px",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              <Link href="/" style={linkStyle}>الرئيسية</Link>
              <Link href="/About" style={linkStyle}>عن مآب</Link>
              <Link href="/Artworks" style={linkStyle}>الأعمال</Link>
              <Link href="/Workshops" style={linkStyle}>الورش</Link>
              <Link href="/Artists" style={linkStyle}>الفنانون</Link>
              <Link href="/Contact" style={linkStyle}>اتصل بنا</Link>
              <Link href="/en" style={linkStyle}>EN</Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 20px",
          }}
        >
          {children}
        </main>

        {/* LICENSE (SUBTLE) */}
        <div
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#777",
            marginBottom: "20px",
          }}
        >
          بترخيص من وزارة الثقافة – هيئة الفنون البصرية
        </div>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #eee",
            padding: "20px",
            textAlign: "center",
            fontSize: "13px",
            color: "#888",
          }}
        >
          Maab Art Space 2026 ©
        </footer>
      </body>
    </html>
  );
}

const linkStyle = {
  color: "#111",
  textDecoration: "none",
};<a href="/editions">نسخ فنية</a>
