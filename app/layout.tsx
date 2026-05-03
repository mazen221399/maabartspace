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
            <Link href="/Workshops">ورش العمل</Link>
            <Link href="/Contact">تواصل معنا</Link>
          </nav>
        </header>

        {/* ===== LOGO ===== */}
        <div className="logo-center">
          MAAB
        </div>

        {/* ===== CONTENT ===== */}
        <main className="content">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">

          <div className="footer-brand">
            M A A B Artspace
          </div>

          <div className="footer-text">
            جميع الأعمال الفنية والصور محفوظة الحقوق ولا يجوز استخدامها أو إعادة إنتاجها.
          </div>

          <div className="footer-text-en">
            All artworks and images are protected
            <br />
            Unauthorized use or reproduction is strictly prohibited
          </div>

        </footer>

      </body>
    </html>
  );
}