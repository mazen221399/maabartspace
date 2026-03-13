"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");

  return (
    <html lang={isEnglish ? "en" : "ar"} dir={isEnglish ? "ltr" : "rtl"}>
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

            {!isEnglish ? (
              <nav className="desktopNav">
                <Link className="navLink" href="/">
                  الرئيسية
                </Link>
                <Link className="navLink" href="/About">
                  عن مآب
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
                <Link className="navLink" href="/en">
                  EN
                </Link>
              </nav>
            ) : (
              <nav className="desktopNav">
                <Link className="navLink" href="/en">
                  Home
                </Link>
                <Link className="navLink" href="/en/about">
                  About
                </Link>
                <Link className="navLink" href="/en/artworks">
                  Artworks
                </Link>
                <Link className="navLink" href="/en/workshops">
                  Workshops
                </Link>
                <Link className="navLink" href="/en/artists">
                  Artists
                </Link>
                <Link className="navLink" href="/en/contact">
                  Contact
                </Link>
                <Link className="navLink" href="/">
                  AR
                </Link>
              </nav>
            )}
          </div>

          {menuOpen && !isEnglish && (
            <nav className="mobileNav">
              <Link className="mobileNavLink" href="/" onClick={() => setMenuOpen(false)}>
                الرئيسية
              </Link>
              <Link className="mobileNavLink" href="/About" onClick={() => setMenuOpen(false)}>
                عن مآب
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
              <Link className="mobileNavLink" href="/en" onClick={() => setMenuOpen(false)}>
                English
              </Link>
            </nav>
          )}

          {menuOpen && isEnglish && (
            <nav className="mobileNav">
              <Link className="mobileNavLink" href="/en" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link className="mobileNavLink" href="/en/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link className="mobileNavLink" href="/en/artworks" onClick={() => setMenuOpen(false)}>
                Artworks
              </Link>
              <Link className="mobileNavLink" href="/en/workshops" onClick={() => setMenuOpen(false)}>
                Workshops
              </Link>
              <Link className="mobileNavLink" href="/en/artists" onClick={() => setMenuOpen(false)}>
                Artists
              </Link>
              <Link className="mobileNavLink" href="/en/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link className="mobileNavLink" href="/" onClick={() => setMenuOpen(false)}>
                العربية
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
                {isEnglish
                  ? "MAAB is a contemporary art space dedicated to showcasing artistic experiences and cultural programs."
                  : "مآب مساحة فنية معاصرة تُعنى بعرض التجارب الفنية والبرامج الثقافية."}
              </p>
            </div>

            <div>
              <h4>{isEnglish ? "Links" : "روابط"}</h4>
              {!isEnglish ? (
                <>
                  <p><a href="/">الرئيسية</a></p>
                  <p><a href="/About">عن مآب</a></p>
                  <p><a href="/Artworks">الأعمال</a></p>
                  <p><a href="/Contact">اتصل بنا</a></p>
                </>
              ) : (
                <>
                  <p><a href="/en">Home</a></p>
                  <p><a href="/en/about">About</a></p>
                  <p><a href="/en/artworks">Artworks</a></p>
                  <p><a href="/en/contact">Contact</a></p>
                </>
              )}
            </div>

            <div>
              <h4>{isEnglish ? "Contact" : "تواصل"}</h4>
              <p>info@maabartspace.com</p>
              <p>{isEnglish ? "Riyadh, Saudi Arabia" : "الرياض – السعودية"}</p>
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
            © {new Date().getFullYear()} Maab Art Space
          </div>
        </footer>
      </body>
    </html>
  );
}