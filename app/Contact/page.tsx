export default function ContactPage() {
  return (
    <main className="contact-wrapper">

      <div className="contact-box">

        <h1>تواصل معنا</h1>

        {/* ===== عرض عمل فني ===== */}
        <section>
          <h2>عرض عمل فني</h2>
          <p>إذا كنت فنان وترغب في عرض أعمالك ضمن مآب</p>
          <a
            href="https://forms.gle/3bsWYjdUTm1pMECk7"
            target="_blank"
            className="btn primary"
          >
            تعبئة النموذج
          </a>
        </section>

        {/* ===== تسجيل كمدرب ===== */}
        <section>
          <h2>التسجيل كمدرب فنون</h2>
          <p>انضم لتقديم ورش فنية ضمن برامج مآب</p>
          <a
            href="https://forms.gle/Y3x3EjJkNfhs4Fq86"
            target="_blank"
            className="btn primary"
          >
            التسجيل الآن
          </a>
        </section>

        {/* ===== استبيان الورش ===== */}
        <section>
          <h2>استبيان الورش التدريبية</h2>
          <p>ساعدنا في تطوير تجربة الورش الفنية</p>
          <a
            href="https://forms.gle/rMeziHoErQiMQkXr9"
            target="_blank"
            className="btn primary"
          >
            المشاركة في الاستبيان
          </a>
        </section>

        {/* ===== تواصل مباشر ===== */}
        <section>
          <h2>تواصل مباشر</h2>
          <p>للاستفسارات العامة</p>

          <div className="actions">
            <a
              href="https://wa.me/966554520495"
              target="_blank"
              className="btn whatsapp"
            >
              واتساب
            </a>

            <a
              href="mailto:info@maabartspace.com"
              className="btn email"
            >
              إيميل
            </a>
          </div>
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
          max-width: 600px;
          width: 100%;
          padding: 40px;
          border-radius: 12px;

          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);

          color: white;
          text-align: center;
        }

        h1 {
          margin-bottom: 30px;
        }

        section {
          margin-bottom: 30px;
        }

        h2 {
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          color: #ccc;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
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