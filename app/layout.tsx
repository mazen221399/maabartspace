import "./globals.css";

export const metadata = {
  title: "MAAB Art Space",
  description: "MAAB Art Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        {/* Header بسيط */}
        <header style={{
          padding: "20px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontWeight: "bold" }}>MAAB</div>

          <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <a href="/">الرئيسية</a>
            <a href="/Artists">الفنانون</a>
            <a href="/Artworks">الأعمال</a>
            <a href="/Workshops">الورش</a>
            <a href="/Contact">اتصل بنا</a>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}