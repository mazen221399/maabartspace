export default function EnglishContactPage() {
  return (
    <main style={{ padding: "60px 20px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "30px" }}>
          Contact
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          <div style={card}>
            <h3>Phone</h3>
            <p style={text}>+966 50 000 0000</p>
          </div>

          <div style={card}>
            <h3>Email</h3>
            <p style={text}>info@maabartspace.com</p>
          </div>

          <div style={card}>
            <h3>Location</h3>
            <p style={text}>Riyadh – Saudi Arabia</p>
          </div>

          <div style={card}>
            <h3>Working Hours</h3>
            <p style={text}>
              Saturday – Thursday
              <br />
              4:00 PM – 10:00 PM
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