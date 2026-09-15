"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page">

      <section className="info-box">
        <h2>الرؤية</h2>
        <p>
          أن تكون مآب مساحة فنية رائدة تعكس الذائقة الرفيعة وتحتضن الإبداع.
        </p>

        <h2>الرسالة</h2>
        <p>
          تقديم تجربة فنية فاخرة تربط الفنان بالمقتني ضمن بيئة احترافية.
        </p>

        <h2>عن مآب</h2>

        <p>
          مآب، مساحة فنية مقرها الرياض، تُعنى بعرض الأعمال الفنية الأصلية
          المختارة بعناية لكوكبة من الفنانين المحترفين وذوي الخبرة الواسعة،
          ضمن بيئة بصرية تحتفي بالقيمة الفنية والجودة والهوية الثقافية.
        </p>

        <p>
          تجمع مآب بين الفنانين والمقتنين والمهتمين بالفنون، وتتيح مساحة
          لعرض التجارب الفنية والأعمال الأصلية والتفاعل معها ضمن بيئة
          احترافية.
        </p>

        <p>
          كما تستضيف مآب الورش التدريبية والجلسات الفنية والمعارض الفردية
          والجماعية، بما يسهم في نقل المعرفة وتعزيز الحوار الفني وتقديم
          تجارب تجمع بين الفن والثقافة والحرف والهوية.
        </p>
      </section>


      {/* ===== خدمات مآب ===== */}

      <section className="services-section">

        <h2 className="services-title">خدمات مآب</h2>

        <p className="services-intro">
          تقدم مآب خدمات فنية وثقافية للفنانين، والشركات والمنظمات،
          من خلال حلول وتجارب مصممة وفق طبيعة كل مشروع واحتياجاته.
        </p>

        <div className="services-grid">

          <Link href="/artists-services" className="service-card">
            <span className="service-label">للفنانين</span>

            <h3>خدمات الفنانين</h3>

            <p>
              المعارض، الورش، عرض الأعمال، التوثيق والإنتاج،
              وخدمات تساعد الفنان على تقديم تجربته بصورة احترافية.
            </p>

            <span className="service-link">
              استعرض خدمات الفنانين ←
            </span>
          </Link>


          <Link
            href="/organizations-services"
            className="service-card"
          >
            <span className="service-label">للجهات</span>

            <h3>خدمات الشركات والمنظمات</h3>

            <p>
              الأعمال الفنية والتكليفات الخاصة، الورش والتجارب،
              الفعاليات والبرامج الثقافية المصممة حسب احتياج الجهة.
            </p>

            <span className="service-link">
              استعرض خدمات الشركات والمنظمات ←
            </span>
          </Link>

        </div>
      </section>


      <style jsx>{`
        .home-page {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px 80px;
          direction: rtl;
        }

        .services-section {
          margin-top: 80px;
          text-align: center;
        }

        .services-title {
          color: #f2d23b;
          font-size: 30px;
          margin-bottom: 15px;
        }

        .services-intro {
          max-width: 720px;
          margin: 0 auto 35px;
          color: #ccc;
          line-height: 2;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .service-card {
          display: block;
          padding: 35px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          text-align: right;
          text-decoration: none !important;
          color: white;
          transition: 0.3s;
        }

        .service-card,
        .service-card:hover,
        .service-card:focus,
        .service-card:visited,
        .service-card * {
          text-decoration: none !important;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #f2d23b;
        }

        .service-label {
          color: #f2d23b;
          font-size: 14px;
        }

        .service-card h3 {
          margin: 12px 0;
          font-size: 23px;
        }

        .service-card p {
          color: #bbb;
          line-height: 1.9;
          font-size: 15px;
        }

        .service-link {
          display: inline-block;
          margin-top: 15px;
          color: #f2d23b;
          font-weight: bold;
        }

        @media (max-width: 700px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 28px 22px;
          }
        }
      `}</style>

    </div>
  );
}