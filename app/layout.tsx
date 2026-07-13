import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "MAAB Art Space",
  description: "MAAB Art Space",
};

const instagramUrl = "https://www.instagram.com/maab.artspace/";
const linkedinUrl = "https://www.linkedin.com/company/maab-artspace/";
const mapsUrl = "https://maps.app.goo.gl/URK8kmirbhj3o46E8";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="site-bg">
        {/* ===== GOOGLE ANALYTICS ===== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DX05VKQH9F"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "G-DX05VKQH9F");
          `}
        </Script>

        {/* ===== HEADER ===== */}
        <header className="navbar">
          <div className="navbar-inner">
            {/* اللوجو */}
            <Link
              href="/"
              className="header-logo"
              aria-label="الانتقال إلى الصفحة الرئيسية"
            >
              <img
                src="/images/logo.jpg"
                alt="MAAB Art Space"
                draggable={false}
              />
            </Link>

            {/* روابط الصفحات */}
            <nav className="nav-links" aria-label="القائمة الرئيسية">
              <Link href="/">الرئيسية</Link>
              <Link href="/artists">الفنانون</Link>
              <Link href="/Artworks">الأعمال الفنية</Link>
              <Link href="/Workshops">الورش والفعاليات</Link>
              <Link href="/collectors">مجتمع المقتنين</Link>
              <Link href="/Contact">اتصل بنا</Link>
            </nav>

            {/* روابط التواصل والموقع */}
            <div className="header-socials">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="حساب مآب على إنستجرام"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="social-dot"
                  />
                </svg>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحة مآب على لينكدإن"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7" />
                  <path d="M8 7.5v.01" />
                  <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
                  <path d="M12 10v7" />
                </svg>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="موقع مآب على خرائط Google"
                title="Google Maps"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* ===== PAGE CONTENT ===== */}
        <main className="content">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-brand">M A A B Art Space</div>

          <div className="footer-socials">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <span>•</span>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </div>

          <p className="footer-text-ar">
            جميع حقوق الصور والأعمال الفنية محفوظة، ولا يجوز استخدامها أو
            إعادة إنتاجها بأي شكل من الأشكال.
          </p>

          <p className="footer-text-en" dir="ltr">
            All artworks and images are protected. Unauthorized use or
            reproduction is strictly prohibited.
          </p>
        </footer>
      </body>
    </html>
  );
}