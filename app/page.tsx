"use client";

export default function Home() {
  return (
    <main className="home">

      {/* الخلفية */}
      <div className="bg"></div>
      <div className="overlay"></div>

      {/* المحتوى */}
      <section className="hero">
        <h1>MAAB</h1>
      </section>

      <section className="about">
        <h2>عن مآب</h2>
        <p>
          مآب مساحة فنية تُعنى بتقديم تجربة متكاملة تجمع بين عرض الأعمال الفنية
          ونقل المعرفة من خلال ورش تدريبية وممارسات فنية وحياتية.
        </p>
      </section>

      <section className="vision">
        <h2>الرؤية</h2>
        <p>
          أن تكون مآب وجهة فنية رائدة تعكس قيمة الفن كهوية ثقافية أصيلة.
        </p>
      </section>

      <section className="mission">
        <h2>الرسالة</h2>
        <p>
          تقديم تجربة فنية متكاملة، وإتاحة مساحات للتعلم والتطوير من خلال برامج
          وورش متخصصة في الفنون والممارسات الحياتية.
        </p>
      </section>

      <style jsx>{`
        .home {
          position: relative;
          color: white;
        }

        /* الخلفية */
        .bg {
          position: fixed;
          inset: 0;
          background-image: url("/images/bg.jpg");
          background-size: cover;
          background-position: center;
          filter: blur(6px) brightness(0.8);
          transform: scale(1.05);
          z-index: -2;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9));
          z-index: -1;
        }

        /* الهيرو */
        .hero {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero h1 {
          font-size: 60px;
          letter-spacing: 6px;
        }

        /* الأقسام */
        section {
          max-width: 800px;
          margin: auto;
          padding: 80px 20px;
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 26px;
        }

        p {
          line-height: 1.8;
          opacity: 0.9;
        }
      `}</style>

    </main>
  );
}