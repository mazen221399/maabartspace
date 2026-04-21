export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        {/* المحتوى */}
        {children}

        {/* ====== LICENSE TEXT ====== */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "15px",
            fontWeight: "600",
            direction: "rtl",
          }}
        >
          بترخيص من وزارة الثقافة – هيئة الفنون البصرية
        </div>

        {/* ====== FOOTER ====== */}
        <footer
          style={{
            backgroundColor: "#e5c94c",
            padding: "12px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {/* النص */}
            <div style={{ fontSize: "14px" }}>
              Maab Art Space 2026 ©
            </div>

            {/* اللوجو */}
            <img
              src="/images/logovac.jpg"
              alt="VAC"
              style={{
                width: "70px",
                filter: "grayscale(100%)",
                opacity: 0.9,
              }}
            />
          </div>
        </footer>

      </body>
    </html>
  );
}