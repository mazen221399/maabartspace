export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "120px 20px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {/* ===== عرض عمل فني ===== */}
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "40px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.03)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
              fontSize: "28px",
            }}
          >
            عرض عمل فني
          </h2>

          <p
            style={{
              lineHeight: "2",
              color: "#ccc",
              marginBottom: "25px",
            }}
          >
            شكراً لاهتمامكم،
            <br />
            وفي حال الرغبة في تقديم الطلب نأمل التواصل عبر الإيميل:
          </p>

          <a
            href="mailto:maab.artspace@gmail.com"
            style={{
              color: "#F6D300",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            maab.artspace@gmail.com
          </a>
        </section>

        {/* ===== التسجيل كمدرب فنون ===== */}
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "40px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.03)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
              fontSize: "28px",
            }}
          >
            التسجيل كمدرب فنون
          </h2>

          <p
            style={{
              lineHeight: "2",
              color: "#ccc",
              marginBottom: "25px",
            }}
          >
            شكراً لاهتمامكم،
            <br />
            وفي حال الرغبة في تقديم الطلب نأمل التواصل عبر الإيميل:
          </p>

          <a
            href="mailto:maab.artspace@gmail.com"
            style={{
              color: "#F6D300",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            maab.artspace@gmail.com
          </a>
        </section>
      </div>

      {/* ===== معلومات التواصل ===== */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          lineHeight: "2.2",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "30px",
          }}
        >
          للاستفسارات
        </h2>

        <p style={{ color: "#ccc" }}>
          Email:
        </p>

        <a
          href="mailto:info@maabartspace.com"
          style={{
            color: "#F6D300",
            textDecoration: "none",
            display: "block",
            marginBottom: "15px",
          }}
        >
          maab.artspace@gmail.com
        </a>

        <p style={{ color: "#ccc" }}>
          WhatsApp:
        </p>

        <a
          href="https://wa.me/966554520495"
          target="_blank"
          style={{
            color: "#F6D300",
            textDecoration: "none",
          }}
        >
          +966554520495
        </a>
      </div>
    </main>
  );
}