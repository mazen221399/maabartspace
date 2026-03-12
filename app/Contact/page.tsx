export default function ContactPage() {
  return (
    <main style={{ padding: "60px 20px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "30px" }}>
          اتصل بنا
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          <div style={card}>
            <h3>رقم الجوال</h3>
            <p style={text}>+966 50 000 0000</p>
          </div>

          <div style={card}>
            <h3>البريد الإلكتروني</h3>
            <p style={text}>info@maabartspace.com</p>
          </div>

          <div style={card}>
            <h3>الموقع</h3>
            <p style={text}>الرياض – المملكة العربية السعودية</p>
          </div>

          <div style={card}>
            <h3>ساعات العمل</h3>
            <p style={text}>
              السبت – الخميس
              <br />
              5:00 مساءً – 11:00 مساءً
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const card = {
  border: "1px solid #e5e5e5",
  borderRadius: "16px",
  padding: "30px",
};

const text = {
  color: "#666",
  fontSize: "17px",
};