export default function WorkshopsPage() {
  return (
    <main style={{ padding: "60px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
        الورش التدريبية
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "40px",
          maxWidth: "850px",
          lineHeight: "1.8",
        }}
      >
        يقدم مآب مجموعة من الورش الفنية والإبداعية المتخصصة التي تهدف إلى تطوير
        المهارات، وتعزيز التجربة الإبداعية، وربط المشاركين بالممارسات الفنية
        والثقافية المعاصرة من خلال برامج تدريبية متنوعة يقدمها مختصون وفنانون.
      </p>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          أنواع الورش
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>الخط العربي</h3>
            <p style={cardTextStyle}>
              ورش متخصصة في تعلم قواعد الحرف العربي وتقنيات الخط المختلفة.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>الرسم</h3>
            <p style={cardTextStyle}>
              ورش تركز على أساسيات الرسم والتكوين البصري والتعبير الفني.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>النحت</h3>
            <p style={cardTextStyle}>
              ورش عملية للتعرف على مبادئ النحت وتشكيل المجسمات بخامات متنوعة.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>الفن المعاصر</h3>
            <p style={cardTextStyle}>
              ورش تستكشف المفاهيم والأساليب الحديثة في الممارسة الفنية المعاصرة.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>تصميم المجوهرات</h3>
            <p style={cardTextStyle}>
              ورش لتعلم أساسيات تصميم المجوهرات وتطوير الأفكار الفنية القابلة
              للتنفيذ.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>الفنون الأدائية</h3>
            <p style={cardTextStyle}>
              ورش في التعبير الأدائي والأداء الحركي وتطوير الحضور الإبداعي.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>المهارات الحياتية</h3>
            <p style={cardTextStyle}>
              ورش تنمي مهارات التفكير والتواصل والثقة بالنفس عبر أدوات إبداعية.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>الأسلوب الكلاسيكي</h3>
            <p style={cardTextStyle}>
              ورش مستلهمة من المدارس الكلاسيكية وتقنيات البناء الفني التقليدي.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>لقاءات مع فنانين</h3>
            <p style={cardTextStyle}>
              جلسات ولقاءات حوارية مع فنانين لمشاركة التجارب والخبرات والمسارات
              الفنية.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          الورش القادمة
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>ورشة الخط العربي للمبتدئين</h3>
            <p style={cardTextStyle}>المدرب: يحدد لاحقًا</p>
            <p style={cardTextStyle}>التاريخ: يحدد لاحقًا</p>
            <p style={cardTextStyle}>الوقت: يحدد لاحقًا</p>
            <button style={buttonStyle}>التسجيل قريبًا</button>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>ورشة الرسم والتكوين البصري</h3>
            <p style={cardTextStyle}>المدرب: يحدد لاحقًا</p>
            <p style={cardTextStyle}>التاريخ: يحدد لاحقًا</p>
            <p style={cardTextStyle}>الوقت: يحدد لاحقًا</p>
            <button style={buttonStyle}>التسجيل قريبًا</button>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>ورشة تصميم المجوهرات</h3>
            <p style={cardTextStyle}>المدرب: يحدد لاحقًا</p>
            <p style={cardTextStyle}>التاريخ: يحدد لاحقًا</p>
            <p style={cardTextStyle}>الوقت: يحدد لاحقًا</p>
            <button style={buttonStyle}>التسجيل قريبًا</button>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          المدربون
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>يحدد لاحقًا</h3>
            <p style={cardTextStyle}>
              سيتم تحديث بيانات المدربين المعتمدين ضمن برامج مآب التدريبية.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>يحدد لاحقًا</h3>
            <p style={cardTextStyle}>
              سيتم تحديث بيانات المدربين المعتمدين ضمن برامج مآب التدريبية.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={imagePlaceholderStyle} />
            <h3 style={cardTitleStyle}>يحدد لاحقًا</h3>
            <p style={cardTextStyle}>
              سيتم تحديث بيانات المدربين المعتمدين ضمن برامج مآب التدريبية.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          صور من الورش السابقة
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={galleryCardStyle}>
            <div style={galleryImageStyle} />
            <p style={galleryTextStyle}>توثيق بصري من إحدى الورش السابقة</p>
          </div>

          <div style={galleryCardStyle}>
            <div style={galleryImageStyle} />
            <p style={galleryTextStyle}>نماذج من تفاعل المشاركين</p>
          </div>

          <div style={galleryCardStyle}>
            <div style={galleryImageStyle} />
            <p style={galleryTextStyle}>لقطات من أنشطة وفعاليات مآب</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  border: "1px solid #e5e5e5",
  borderRadius: "16px",
  padding: "20px",
};

const imagePlaceholderStyle = {
  height: "180px",
  background: "#f2f2f2",
  borderRadius: "12px",
  marginBottom: "16px",
};

const cardTitleStyle = {
  margin: "0 0 8px 0",
};

const cardTextStyle = {
  margin: "0 0 8px 0",
  color: "#666",
  lineHeight: "1.7",
};

const galleryCardStyle = {
  border: "1px solid #e5e5e5",
  borderRadius: "16px",
  padding: "16px",
};

const galleryImageStyle = {
  height: "220px",
  background: "#f2f2f2",
  borderRadius: "12px",
  marginBottom: "12px",
};

const galleryTextStyle = {
  margin: 0,
  color: "#444",
};

const buttonStyle = {
  marginTop: "16px",
  padding: "12px 18px",
  background: "#111",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};