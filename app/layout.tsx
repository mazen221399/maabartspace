import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const isHome = pathname === "/";

  return (
    <html lang="ar">
      <body className={isHome ? "home-bg" : "site-bg"}>
        {children}

        <style jsx global>{`
          .home-bg {
            background: black;
            min-height: 100vh;
          }

          .site-bg {
            background:
              linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
              url("/images/maabwide.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
          }
        `}</style>
      </body>
    </html>
  );
}
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  );
}