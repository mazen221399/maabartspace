"use client";

export default function OrganizationsServicesPage() {
  const services = [
    {
      title: "توريد واقتناء الأعمال الفنية",
      description:
        "اختيار وتنسيق وتوريد الأعمال الفنية للمكاتب والمقار والفنادق والمشاريع، بما يتناسب مع هوية المكان واحتياجات الجهة.",
    },
    {
      title: "التكليفات الفنية الخاصة",
      description:
        "تنفيذ أعمال فنية خاصة بالتعاون مع الفنانين، يتم تطويرها وفق طبيعة المشروع والمساحة والهوية المطلوبة.",
    },
    {
      title: "الورش والتجارب الفنية",
      description:
        "تصميم وتنفيذ ورش وتجارب فنية وثقافية للموظفين والعملاء والضيوف، بما يتناسب مع أهداف الجهة وطبيعة المناسبة.",
    },
    {
      title: "الفعاليات والمعارض الخاصة",
      description:
        "تصميم وتنظيم واستضافة المعارض والفعاليات الفنية والثقافية الخاصة بالشركات والمنظمات.",
    },
    {
      title: "الهدايا الفنية والثقافية",
      description:
        "تطوير واختيار أعمال وهدايا فنية وثقافية للمناسبات وكبار الضيوف، مع إمكانية تنفيذ تكليفات خاصة حسب الطلب.",
    },
    {
      title: "البرامج الثقافية المخصصة",
      description:
        "تطوير برامج وتجارب فنية وثقافية مصممة وفق احتياجات الجهة وأهدافها، بالتعاون مع الفنانين والممارسين والمتخصصين.",
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">خدمات الشركات والمنظمات</p>

        <h1>حلول فنية وثقافية مصممة لاحتياجات منشأتكم</h1>

        <p className="intro">
          تعمل مآب مع الشركات والمنظمات لتطوير تجارب وحلول فنية وثقافية
          تتناسب مع احتياجاتها، بدءًا من اختيار وتكليف الأعمال الفنية،
          وصولًا إلى الورش والفعاليات والبرامج الخاصة.
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

      <section className="process">
        <p className="eyebrow">كيف نعمل معكم؟</p>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <strong>نفهم الاحتياج</strong>
          </div>

          <div className="arrow">←</div>

          <div className="step">
            <span>02</span>
            <strong>نطور المقترح</strong>
          </div>

          <div className="arrow">←</div>

          <div className="step">
            <span>03</span>
            <strong>نحدد الفنان أو البرنامج</strong>
          </div>

          <div className="arrow">←</div>

          <div className="step">
            <span>04</span>
            <strong>ننـفذ</strong>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>لديكم مشروع أو فكرة؟</h2>

        <p>
          شاركونا احتياجكم، ويسعدنا تطوير مقترح فني أو ثقافي يتناسب مع
          منشأتكم.
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

        .process {
          margin: 90px auto 0;
          text-align: center;
        }

        .steps {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .step {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .step span {
          color: #f2d23b;
          font-size: 13px;
        }

        .step strong {
          font-size: 16px;
        }

        .arrow {
          color: #f2d23b;
          font-size: 22px;
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
          line-height: 1.8;
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

          .steps {
            flex-direction: column;
          }

          .arrow {
            transform: rotate(-90deg);
          }
        }
      `}</style>
    </main>
  );
}