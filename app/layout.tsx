import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>

        <header className="header">
          <nav className="nav">

            <div className="logo">MAAB</div>

            <div className="links">
              <a href="/">الرئيسية</a>
              <a href="/Artists">الفنانون</a>
              <a href="/Artworks">الأعمال</a>
              <a href="/Workshops">الورش</a>
              <a href="/Contact">اتصل بنا</a>
            </div>

          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}