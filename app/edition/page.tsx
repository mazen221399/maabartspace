"use client";

export default function EditionsPage() {
  return (
    <main>
      <h1>نسخ فنية</h1>

      {/* النص التعريفي */}
      <p className="intro">
        تضم هذه الصفحة مجموعة من النسخ الفنية المطبوعة لأعمال مختارة،
        تم إنتاجها بعناية وبجودة عالية، وبعدد محدود جداً.
        <br /><br />
      </p>

      {/* coming soon */}
      <div className="coming">
        <p>قريباً</p>
      </div>

      <style jsx>{`
        main {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding: 60px 20px;
          text-align: center;
        }

        h1 {
          margin-bottom: 20px;
          font-weight: 500;
        }

        .intro {
          max-width: 600px;
          margin: 0 auto 80px;
          font-size: 14px;
          line-height: 1.8;
          color: #ccc;
        }

        .coming {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        }

        .coming p {
          font-size: 18px;
          letter-spacing: 3px;
          color: #888;
        }
      `}</style>
    </main>
  );
}