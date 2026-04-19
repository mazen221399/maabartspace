export default function Workshops() {
  return (
    <main
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
          جاري تصميم ورش ترقى إلى تطلعاتكم
        </h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          كونوا بالقرب
        </p>

        {/* English version */}
        <p style={{ marginTop: "30px", color: "#999" }}>
          Workshops are being designed to meet your expectations. Stay close.
        </p>
      </div>
    </main>
  );
}