export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <img
          src="/images/MAAB LOGO-01.jpg"
          alt="MAAB Art Space"
          style={{
            width: "120px",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(28px,5vw,40px)",
            marginBottom: "20px",
          }}
        >
          مآب مساحة فنية
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.9",
            marginBottom: "30px",
          }}
        >
          الموقع حالياً تحت التطوير
          <br />
          سيتم إطلاقه قريباً.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#888",
          }}
        >
          MAAB Art Space – Coming Soon
        </p>

        <div
          style={{
            marginTop: "40px",
            height: "6px",
            width: "160px",
            background: "#FFD100",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </main>
  );
}