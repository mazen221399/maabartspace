import "./globals.css";
import Link from "next/link";
import Script from "next/script";

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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DX05VKQH9F"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DX05VKQH9F');
          `}
        </Script>

        {/* ===== HEADER ===== */}
        <header className="navbar">
          <nav className="nav-links">
            <Link href="/">الرئيسية</Link>
            <Link href="/artists">الفنانون</Link>
            <Link href="/Artworks">الأعمال الفنية</Link>
            <Link href="/Workshops">الورش التدريبية</Link>
            <Link href="/collectors">مجتمع المقتنين</Link>
            <Link href="/Contact">اتصل بنا</Link>
          </nav>
        </header>

        {/* ===== MAAB CENTER ===== */}
        <div className="brand-center">MAAB</div>

        {/* ===== CONTENT ===== */}
        <main className="content">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-brand">M A A B Art Space</div>

          <div className="footer-text-ar">
            جميع الحقوق للصور محفوظة ولا يجوز استخدامها او اعادة انتاجها بأي شكل من الاشكال
          </div>

          <div className="footer-text-en">
            All images are protected and may not be used or reproduced in any form.
          </div>
        </footer>

      </body>
    </html>
  );
}