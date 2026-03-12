import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Maab Artspace",
  description: "Official website of Maab Artspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#fff", color: "#111" }}>
        <header
          style={{
            borderBottom: "1px solid #eee",
            background: "#fff",
          }}
        >
          <div
            style={{
              height: "6px",
              background: "#FFD100",
              width: "100%",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 60px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                letterSpacing: "1px",
              }}
            >
              MAAB
            </div>

            <nav
              style={{
                display: "flex",
                gap: "26px",
              }}
            >
              <Link className="navLink" href="/">
                الرئيسية
              </Link>
              <Link className="navLink" href="/About">
                عن مآب
              </Link>
              <Link className="navLink" href="/Vision">
                الرؤية
              </Link>
              <Link className="navLink" href="/Artworks">
                الأعمال
              </Link>
              <Link className="navLink" href="/Workshops">
                الورش
              </Link>
              <Link className="navLink" href="/Artists">
                الفنانون
              </Link>
              <Link className="navLink" href="/Contact">
                اتصل بنا
              </Link>
            </nav>
          </div>
        </header>

        {children}
        <footer
  style={{
    marginTop: "80px",
    borderTop: "1px solid #eee",
    background: "#fafafa",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "60px 60px 40px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: "40px",
    }}
  >
    <div>
      <h3 style={{ marginTop: 0 }}>MAAB</h3>

      <p style={{ color: "#666", lineHeight: "1.8" }}>
        مآب مساحة فنية معاصرة تُعنى بعرض الأعمال الفنية وتنظيم المعارض
        والورش الثقافية.
      </p>
    </div>

    <div>
      <h4>روابط</h4>

      <p><a href="/">الرئيسية</a></p>
      <p><a href="/Artworks">الأعمال</a></p>
      <p><a href="/Workshops">الورش</a></p>
      <p><a href="/Artists">الفنانون</a></p>
    </div>

    <div>
      <h4>تواصل</h4>

      <p>info@maabartspace.com</p>
      <p>الرياض – السعودية</p>
    </div>
  </div>

  <div
    style={{
      background: "#FFD100",
      textAlign: "center",
      padding: "12px",
      fontSize: "14px",
    }}
  >
    © {new Date().getFullYear()} M A A B Artspace
  </div>
</footer>
      </body>
    </html>
  );
}
