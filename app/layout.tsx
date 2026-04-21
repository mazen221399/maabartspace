export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        {/* المحتوى */}
        {children}

        {/* ====== LICENSE SECTION ====== */}
        <div
          style={{
            textAlign: "center",
            padding: "25px 20px",
            borderTop: "1px solid #e5e5e5",
            backgroundColor: "#fafafa",
          }}
        >
          <img
            src="/images/logovac.jpg"
            alt="Visual Arts Commission"
            style={{
              width: "180px",
              marginBottom: "10px",
            }}
          />

          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#000",
            }}
          >
            بترخيص من وزارة الثقافة – هيئة الفنون البصرية
          </div>
        </div>

        {/* ====== FOOTER ====== */}
        <footer
          style={{
            backgroundColor: "#e5c94c",
            textAlign: "center",
            padding: "12px",
            fontSize: "14px",
          }}
        >
          Maab Art Space 2026 ©
        </footer>

      </body>
    </html>
  );
}