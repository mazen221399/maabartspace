"use client";
export default function ArtistsServicesPage() {
  const services = [
    {
      title: "المعارض الفردية والجماعية",
      description:
        "استضافة وتنظيم المعارض والتجارب الفنية ضمن مساحة مآب، بما يتناسب مع طبيعة المشروع وتجربة الفنان.",
    },
    {
      title: "تأجير المساحة",
      description:
        "إتاحة مساحة مآب لإقامة المعارض واللقاءات الفنية وإطلاق المشاريع والفعاليات الخاصة.",
    },
    {
      title: "الورش والبرامج الفنية",
      description:
        "إتاحة الفرصة للفنانين والممارسين لتقديم ورشهم وبرامجهم وتجاربهم الفنية والثقافية في مآب.",
    },
    {
      title: "التصوير والتوثيق",
      description:
        "توثيق الأعمال والمعارض والفعاليات الفنية بصورة احترافية للاستخدام في الملفات الفنية والمنصات الرقمية.",
    },
    {
      title: "الطباعة والإنتاج",
      description:
        "خدمات مرتبطة بإنتاج المطبوعات الفنية والنسخ المحدودة والمواد المصاحبة للمشاريع والمعارض.",
    },
    {
      title: "عرض وبيع الأعمال",
      description:
        "إتاحة فرص لعرض الأعمال الفنية وتقديمها للمقتنين وزوار مآب وفق آلية يتم الاتفاق عليها مع الفنان.",
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">خدمات الفنانين</p>

        <h1>مساحة لتقديم تجربتك كما تستحق</h1>

        <p className="intro">
          تقدم مآب للفنانين والممارسين مجموعة من الخدمات المهنية، من استضافة
          المعارض والورش إلى الإنتاج والتوثيق وعرض الأعمال، ضمن مساحة مصممة
          لتقديم التجربة الفنية بصورة متكاملة.
        </p>
      </section>

      <section className="services">
        <div className="grid">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <span className="number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>لديك مشروع أو فكرة؟</h2>

        <p>
          يسعدنا التعرف على تجربتك ومناقشة إمكانية التعاون مع مآب.
        </p>

        <a href="/Contact" className="btn">
          تواصل معنا
        </a>
      </section>

      <style jsx>{`
        .page {
          max-width: 1200px;
          margin: auto;
          padding: 120px 20px 80px;
          color: white;
          direction: rtl;
        }

        .hero {
          max-width: 850px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .eyebrow {
          color: #f2d23b;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .hero h1 {
          font-size: 42px;
          margin: 0 0 25px;
        }

        .intro {
          color: #ccc;
          line-height: 2;
          font-size: 17px;
          margin: auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 28px;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: #f2d23b;
        }

        .number {
          display: block;
          color: #f2d23b;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .card h2 {
          font-size: 21px;
          margin: 0 0 14px;
        }

        .card p {
          color: #bbb;
          line-height: 1.9;
          margin: 0;
          font-size: 14px;
        }

        .contact {
          margin: 80px auto 0;
          padding: 45px 25px;
          max-width: 800px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .contact h2 {
          margin-bottom: 12px;
        }

        .contact p {
          color: #bbb;
          margin-bottom: 25px;
        }

        .btn {
          display: inline-block;
          background: #f2d23b;
          color: black;
          padding: 12px 30px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .page {
            padding: 90px 15px 60px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .intro {
            font-size: 15px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}