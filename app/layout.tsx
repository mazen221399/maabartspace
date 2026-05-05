import "./globals.css";
import Link from "next/link";

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
      <body className="site-bg">

        {/* ===== NAVBAR ===== */}
        <header className="navbar">
          <nav className="nav-links">
            <Link href="/">الرئيسية</Link>
            <Link href="/artists">الفنانون</Link>
            <Link href="/Artworks">الأعمال الفنية</Link>
            <Link href="/Workshops">الورش التدريبية</Link>
            <Link href="/Contact">اتصل بنا</Link>
          </nav>
        </header>

        {/* ===== CENTER LOGO ===== */}
        <div className="logo-center">
          M A A B
        </div>

        {/* ===== CONTENT ===== */}
        <main className="content">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          جميع حقوق الصور محفوظة ولا يجوز استخدامها أو إعادة انتاجها بأي شكل من الأشكال
        </footer>

      </body>
    </html>
  );
}