"use client";

export default function ContactPage() {
  return (
    <main className="contact-wrapper">

      <div className="contact-box">

        <h1>تواصل معنا</h1>

        {/* ===== عرض عمل فني ===== */}
        <section className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16v12H4z" />
              <path d="M4 16l4-4 4 4 4-4 4 4" />
            </svg>
          </div>
          <h2>عرض عمل فني</h2>
          <p>إذا كنت فنان وترغب في عرض أعمالك ضمن مآب</p>
          <a href="https://forms.gle/3bsWYjdUTm1pMECk7" target="_blank" className="btn primary">
            تعبئة النموذج
          </a>
        </section>

        {/* ===== تسجيل كمدرب ===== */}
        <section className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l9 4-9 4-9-4 9-4z" />
              <path d="M3 10v4c0 2 4 4 9 4s9-2 9-4v-4" />
            </svg>
          </div>
          <h2>التسجيل كمدرب فنون</h2>
          <p>انضم لتقديم ورش فنية ضمن برامج مآب</p>
          <a href="https://forms.gle/Y3x3EjJkNfhs4Fq86" target="_blank" className="btn primary">
            التسجيل الآن
          </a>
        </section>

        {/* ===== استبيان الورش ===== */}
        <section className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M8 8h8M8 12h6M8 16h4" />
            </svg>
          </div>
          <h2>استبيان الورش التدريبية</h2>
          <p>ساعدنا في تطوير تجربة الورش الفنية</p>
          <a href="https://forms.gle/rMeziHoErQiMQkXr9" target="_blank" className="btn primary">
            المشاركة في الاستبيان
          </a>
        </section>

        {/* ===== تواصل مباشر ===== */}
        <section className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16v12H4z" />
              <path d="M4 4l8 6 8-6" />
            </svg>
          </div>
          <h2>تواصل مباشر</h2>
          <p>للاستفسارات العامة</p>

          <div className="actions">
            <a href="https://wa.me/966554520495" target="_blank" className="btn whatsapp">
              واتساب
            </a>

            <a href="mailto:info@maabartspace.com" className="btn email">
              إيميل
            </a>
          </div>
        </section>

        {/* ===== INSTAGRAM ===== */}
        <section className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.5" />
            </svg>
          </div>
          <h2>تابعنا على إنستجرام</h2>
          <p>@maab.artspace</p>

          <a
            href="https://instagram.com/maab.artspace"
            target="_blank"
            className="btn instagram"
          >
            متابعة
          </a>
        </section>

      </div>

      <style jsx>{`
        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 120px 20px;
          min-height: 100vh;
        }

        .contact-box {
          max-width: 650px;
          width: 100%;
          padding: 40px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
          color: white;
          text-align: center;
        }

        h1 {
          margin-bottom: 40px;
          letter-spacing: 2px;
        }

        .card {
          margin-bottom: 25px;
          padding: 20px;
          border-radius: 10px;
          transition: 0.3s;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .card:hover {
          transform: translateY(-5px);
          border: 1px solid rgba(242, 210, 59, 0.4);
          box-shadow: 0 10px 30px rgba(242, 210, 59, 0.1);
        }

        .icon svg {
          width: 32px;
          height: 32px;
          stroke: #f2d23b;
          stroke-width: 1.5;
          fill: none;
          margin-bottom: 10px;
        }

        h2 {
          margin-bottom: 8px;
        }

        p {
          font-size: 14px;
          color: #ccc;
          margin-bottom: 15px;
        }

        .btn {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          transition: 0.3s;
        }

        .primary {
          background: #f2d23b;
          color: black;
        }

        .primary:hover {
          background: #e0c232;
          transform: scale(1.05);
        }

        .instagram {
          border: 1px solid #f2d23b;
          color: #f2d23b;
        }

        .instagram:hover {
          background: #f2d23b;
          color: black;
          transform: scale(1.05);
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .whatsapp {
          background: #25D366;
          color: white;
        }

        .email {
          border: 1px solid white;
          color: white;
        }

        .email:hover {
          background: white;
          color: black;
        }

        @media (max-width: 600px) {
          .contact-box {
            padding: 25px;
          }
        }
      `}</style>

    </main>
  );
}