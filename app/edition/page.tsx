"use client";

export default function EditionsPage() {
  const phone = "966554520495"; // ← حط رقمك هنا

  const handleWhatsApp = () => {
    const message = "مرحباً، أرغب في الاستفسار عن النسخ الفنية في مآب";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main>
      <h1>نسخ فنية</h1>

      {/* النص التعريفي */}
      <p className="intro">
        تضم هذه الصفحة مجموعة من النسخ الفنية المطبوعة لأعمال مختارة،
        تم إنتاجها بعناية وبجودة عالية، وبعدد محدود جداً.
        <br /><br />
        كل نسخة تحمل رقماً تسلسلياً خاصاً،
        وتأتي مرفقة بشهادة اقتناء تثبت أصالتها.
      </p>

      {/* قريباً */}
      <div className="coming">
        <p>قريباً</p>
      </div>

      {/* زر التواصل */}
      <button onClick={handleWhatsApp} className="btn">
        طلب اقتناء
      </button>

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
          margin: 0 auto 60px;
          font-size: 14px;
          line-height: 1.8;
          color: #ccc;
        }

        .coming {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 150px;
        }

        .coming p {
          font-size: 18px;
          letter-spacing: 3px;
          color: #888;
        }

        .btn {
          margin-top: 30px;
          padding: 12px 20px;
          background: #fff;
          color: #000;
          border: none;
          cursor: pointer;
          font-size: 14px;
          transition: 0.2s;
        }

        .btn:hover {
          background: #ddd;
        }
      `}</style>
    </main>
  );
}