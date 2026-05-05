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

        {/* ===== HEADER ===== */}
        <header className="navbar">
          <nav className="nav-links">
            <Link href="/">الرئيسية</Link>
            <Link href="/artists">الفنانون</Link>
            <Link href="/Artworks">الأعمال الفنية</Link>
            <Link href="/Workshops">الورش التدريبية</Link>
            <Link href="/Contact">اتصل بنا</Link>
          </nav>
        </header>

        {/* ===== CENTER BRAND ===== */}
        <div className="brand-center">
          MAAB
        </div>

        {/* ===== CONTENT ===== */}
        <main className="content">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          جميع الحقوق للصور محفوظة ولا يجوز استخدامها او اعادة انتاجها بأي شكل من الاشكال
        </footer>

      </body>
    </html>
  );
}