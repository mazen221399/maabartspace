export default function ContactPage() {
  return (
    <main style={{ padding: "60px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        اتصل بنا
      </h1>

      <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px", maxWidth: "700px" }}>
        يسعدنا تواصلكم مع مآب لأي استفسارات تتعلق بالأعمال الفنية أو الورش أو التعاون مع الفنانين.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "30px"
        }}
      >

        <div style={card}>
          <h3>رقم الجوال</h3>
          <p style={text}>00966-554520495</p>
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
            السبت – الخميس<br/>
            4:00 مساءً – 10:00 مساءً
          </p>
        </div>

      </div>

    </main>
  );
}

const card = {
  border: "1px solid #e5e5e5",
  borderRadius: "16px",
  padding: "30px"
};

const text = {
  color: "#666",
  fontSize: "17px"
};