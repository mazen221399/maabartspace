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
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/Artworks">Artworks</Link>
            <Link href="/Workshops">Workshops</Link>
            <Link href="/Contact">Contact</Link>
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