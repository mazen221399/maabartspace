export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-gray-200">

          <div className="flex gap-6 text-sm">

            <a href="/" className="hover:opacity-60">الرئيسية</a>

            <a href="/about" className="hover:opacity-60">عن مآب</a>

            <a href="/artworks" className="hover:opacity-60">الأعمال</a>

            <a href="/workshops" className="hover:opacity-60">الورش</a>

            <a href="/artists" className="hover:opacity-60">الفنانون</a>

            <a href="/editions" className="hover:opacity-60">
              النسخ الفنية
            </a>

            <a href="/contact" className="hover:opacity-60">اتصل بنا</a>

          </div>

          <div className="text-xl tracking-widest">
            MAAB
          </div>

        </nav>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}