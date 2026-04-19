export default function Artworks() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      
      {/* الصورة */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/images/artworks/hahaha.jpg"
          alt="Artwork"
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* الوصف */}
      <p style={{
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: "1.8",
        fontSize: "16px"
      }}>
        من أعمال فنان الخط العربي مازن أنديجاني، وهي تمثل أشكال اتصالات حرف الهاء في خط الثلث بشكل عفوي، 
        وتترجم حالة السعادة من خلال نطقها والألوان المستخدمة لها. مكتوبة على ورق مقهر طبيعي من بوتان، 
        وبأحبار الشمنك الألمانية وأحبار صينية طبيعية، على إطار عصري بمقاس كلي 56×81 سم. 
        نسخة أصلية (1 من 1).
      </p>

    </main>
  );
}