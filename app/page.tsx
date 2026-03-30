export default function HomePage() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>

      {/* مربع اللوجو */}
      <div
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: "#FFD700",
          margin: "0 auto 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
  src="/logo.jpg"
  alt="MAAB Logo"
  style={{ width: "70%", height: "auto" }}
/>

      {/* الرؤية */}
      <section style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
        <h2>الرؤية</h2>
        <ul style={{ textAlign: "right", lineHeight: "2" }}>
          <li>أن يكون مآب وجهة فنية نخبوية في المملكة تعكس قيمة الفن كهوية ثقافية أصيلة.</li>
          <li>أن يكون مآب منصة فنية رائدة تسهم في إثراء المشهد الفني وتعزيز حضوره.</li>
        </ul>
      </section>

      {/* الرسالة */}
      <section style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
        <h2>الرسالة</h2>
        <ul style={{ textAlign: "right", lineHeight: "2" }}>
          <li>تمثيل وعرض أعمال فنية مختارة بعناية.</li>
          <li>تقديم الدعم والمشورة للفنانين عبر الدورات المتخصصة والجلسات الإرشادية.</li>
          <li>رفع الوعي باقتناء الأعمال الأصيلة ضمن بيئة احترافية وموثوقة.</li>
          <li>تقديم جلسات استشارية وبناء مجموعات فنية للمقتنين.</li>
          <li>نشر ثقافة الفن الأصيل في المجتمع من خلال تنظيم المعارض الفنية بشكل دوري.</li>
        </ul>
      </section>

      {/* الأزرار */}
      <section style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <a
          href="/Contact"
          style={{
            padding: "12px 24px",
            border: "1px solid black",
            textDecoration: "none",
            color: "black",
          }}
        >
          اتصل بنا
        </a>

        <a
          href="https://instagram.com/maab.artspace"
          target="_blank"
          style={{
            padding: "12px 24px",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
          }}
        >
          تابعنا على انستجرام
        </a>
      </section>

    </main>
  );
}