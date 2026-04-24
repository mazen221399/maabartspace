import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>

        <div className="background"></div>

        <header>
          <nav className="nav">
            <div className="links">
              <a href="/">الرئيسية</a>
              <a href="/About">عن مآب</a>
              <a href="/Artworks">الأعمال</a>
              <a href="/Artists">الفنانون</a>
              <a href="/Workshops">الورش</a>
              <a href="/Contact">اتصل بنا</a>
            </div>

            <div className="logo">
              MAAB
            </div>
          </nav>
        </header>

        <main>{children}</main>

      </body>
    </html>
  )
}