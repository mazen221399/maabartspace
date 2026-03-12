"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          background: "#fff",
          color: "#111",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid #eee",
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              height: "6px",
              background: "#FFD100",
              width: "100%",
            }}
          />

          <div className="headerInner">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                letterSpacing: "1px",
              }}
            >
              MAAB
            </div>

            <button
              className="menuButton"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="فتح القائمة"
            >
              ☰
            </button>

            <nav className="desktopNav">
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

          {menuOpen && (
            <nav className="mobileNav">
              <Link className="mobileNavLink" href="/" onClick={() => setMenuOpen(false)}>
                الرئيسية
              </Link>
              <Link className="mobileNavLink" href="/About" onClick={() => setMenuOpen(false)}>
                عن مآب
              </Link>
              <Link className="mobileNavLink" href="/Vision" onClick={() => setMenuOpen(false)}>
                الرؤية
              </Link>
              <Link className="mobileNavLink" href="/Artworks" onClick={() => setMenuOpen(false)}>
                الأعمال
              </Link>
              <Link className="mobileNavLink" href="/Workshops" onClick={() => setMenuOpen(false)}>
                الورش
              </Link>
              <Link className="mobileNavLink" href="/Artists" onClick={() => setMenuOpen(false)}>
                الفنانون
              </Link>
              <Link className="mobileNavLink" href="/Contact" onClick={() => setMenuOpen(false)}>
                اتصل بنا
              </Link>
            </nav>
          )}
        </header>

        {children}

        <footer
          style={{
            marginTop: "80px",
            borderTop: "1px solid #eee",
            background: "#fafafa",
          }}
        >
          <div className="footerGrid">
            <div>
              <h3 style={{ marginTop: 0 }}>MAAB</h3>
              <p style={{ color: "#666", lineHeight: "1.8" }}>
                مآب مساحة فنية معاصرة تُعنى بعرض الأعمال الفنية وتنظيم المعارض
                والورش الثقافية.
              </p>
            </div>

            <div>
              <h4>روابط</h4>
              <p>
                <a href="/">الرئيسية</a>
              </p>
              <p>
                <a href="/Artworks">الأعمال</a>
              </p>
              <p>
                <a href="/Workshops">الورش</a>
              </p>
              <p>
                <a href="/Artists">الفنانون</a>
              </p>
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
            © {new Date().getFullYear()} Maab Artspace
          </div>
        </footer>
      </body>
    </html>
  );
}