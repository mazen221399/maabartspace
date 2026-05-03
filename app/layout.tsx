import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "MAAB Art Space",
  description: "MAAB Art Space",
  icons: {
    icon: "/curve1.jpg",
    shortcut: "/curve1.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className="site-bg">

        {/* ===== NAVBAR ===== */}
        <header className="navbar">
          <nav className="nav-links">
            <Link href="/">الرئيسية</Link>
            <Link href="/artists">فنانو مآب</Link>
            <Link href="/Artworks">الأعمال الفنية</Link>
            <Link href="/Workshops">ورش العمل</Link>
            <Link href="/Contact">تواصل معنا</Link>
          </nav>
        </header>

        {/* ===== LOGO CENTER ===== */}
        <div className="logo-center">
          MAAB
        </div>

        {/* ===== PAGE CONTENT ===== */}
        <main className="content">
          {children}
        </main>

      </body>
    </html>
  );
}