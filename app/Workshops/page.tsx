"use client";

import { useState } from "react";

export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      type: "exhibition",
      title: "معرض اليوم الوطني",
      date: "",
      location: "مآب - قرطبة، الرياض",
      cover: "/images/workshops/nd1.jpg",
      description:
        "دعوة للفنانين للمشاركة في معرض اليوم الوطني، ضمن فعالية فنية تحتفي بالهوية والثقافة والتجارب الإبداعية.",
      registrationStatus: "open",
      registerLink: "https://forms.gle/YMVqD3VcWHwkDNRn9",
      buttonText: "التسجيل للمشاركة",
      note:
        "للاستفسارات، يرجى التواصل معنا عبر البريد الإلكتروني أو الواتساب.",
      images: [
        "/images/workshops/nd1.jpg",
        "/images/workshops/nd2.jpg",
      ],
    },

    {
      type: "workshop",
      title: "الخط العربي من القصبة إلى اللوحة",
      instructor: "مازن أنديجاني",
      date: "5، 6 و8 أغسطس 2026",
      time: "5:00 مساءً - 9:00 مساءً",
      seats: "تم إغلاق التسجيل لاكتمال العدد",
      location: "مآب - قرطبة، الرياض",
      cover: "/images/workshops/hoa.jpg",
      description:
        "ورشة متخصصة في أساسيات الخط العربي، يتعرف خلالها المشاركون على أدوات الخط وإعدادها، والتدريب على خط الثلث، وصولاً إلى تنفيذ عمل خطي متكامل.",
      registrationStatus: "closed",
      registerLink: "",
    },

    {
  type: "workshop",

  title: "فن المظهر السعودي",

  instructor: "خبير المظهر السعودي عبدالله الروكان",

  date: "3 أكتوبر 2026",

  time: "من 5:00 مساءً إلى 9:00 مساءً",

  seats: "المقاعد محدودة",

  location: "مآب - قرطبة، الرياض",

  cover: "/images/workshops/rokan.jpg",

  description:
    "ورشة تدريبية تتناول أسس المظهر السعودي وعناصره الثقافية، مع استعراض أبرز التفاصيل التي تعكس الهوية السعودية في اللباس والمظهر، يقدمها خبير المظهر السعودي عبدالله الروكان.",

  registrationStatus: "open",

  registerLink: "https://forms.gle/7Lzs5gFPb2bgQgtS9",
},
    {
      type: "workshop",
      title: "محاكاة أعمال بابلو بيكاسو",
      instructor: "الفنانة آمنة يعقوب",
      date: "24 إلى 26 يونيو 2026",
      time: "من 6 مساءً إلى 8 مساءً",
      seats: "تم إغلاق التسجيل لاكتمال العدد",
      location: "مآب - قرطبة، الرياض",
      cover: "/images/workshops/picaso1.jpg",
      description:
        "ورشة فنية للصغار للتعرف على قصة الفنان العالمي بابلو بيكاسو، والاتجاه التكعيبي، وأساسيات الألوان والظل والنور، مع تطبيق عملي لمحاكاة إحدى رسوماته باستخدام ألوان الأكريليك.",
      registrationStatus: "closed",
      registerLink: "",
    },
  ];

  const pastEvents = [

    {
  title: "ما خلف النافذة",
  date: "18 – 22 أغسطس 2026",
  cover: "/images/workshops/h11.jpg",
  description:
    "«ما خلف النافذة» معرض فردي للفنان هشام الدخيل، يستعرض تجربته الفنية في الرسم بألوان الباستيل من خلال سرد بصري يتتبع رحلة أنثى تبدأ من العزلة، ثم تنطلق عبر محطات متتابعة نحو مساحات أكثر رحابة واتساعًا. ويرافقها خلال الرحلة قطها «مؤنس»، بوصفه رفيقًا حاضرًا في تفاصيل الحكاية وتحولاتها. يقدم المعرض هذه الرحلة عبر مجموعة من الأعمال التي تتقاطع فيها المشاهد والألوان والشخصيات لتروي فصول الحكاية من نافذة إلى أخرى.",
  images: [
    "/images/workshops/h11.jpg",
    "/images/workshops/h12.jpg",
    "/images/workshops/h13.jpg",
    "/images/workshops/h14.jpg",
    "/images/workshops/h15.jpg",
    "/images/workshops/h17.jpg",
    "/images/workshops/h18.jpg",
    "/images/workshops/h19.jpg",
    "/images/workshops/h20.jpg",
    "/images/workshops/h21.jpg",
    "/images/workshops/h22.jpg",
    "/images/workshops/h23.jpg",
    "/images/workshops/h26.jpg",
    "/images/workshops/h29.jpg",
    "/images/workshops/h30.jpg",
    "/images/workshops/h31.jpg",
    "/images/workshops/h32.jpg",
    "/images/workshops/h33.jpg",
    "/images/workshops/h34.jpg",
"/images/workshops/h35.jpg",
"/images/workshops/h36.jpg",
"/images/workshops/h37.jpg",
"/images/workshops/h38.jpg",
"/images/workshops/h39.jpg",
"/images/workshops/h40.jpg",
"/images/workshops/h41.jpg",
"/images/workshops/h42.jpg",
  ],
},

    {
      title: "الخط العربي من القصبة إلى اللوحة",
      date: "5، 6 و8 أغسطس 2026",
      cover: "/images/workshops/ac18.jpg",
      description:
        "ورشة متخصصة في أساسيات خط الثلث، تعرّف خلالها المشاركون على مبادئ الخط وإعداد أدواته، وأنواع أقلام القصب والطومار، والأوراق المستخدمة في الكتابة بما فيها الورق الكوشيه والورق المقهر. كما تناولت الورشة طرق إعداد الورق المقهر وتجهيزه للكتابة، وإعداد القوالب وطرق نقلها إلى الورق، وصولاً إلى تنفيذ الأعمال الخطية وتأطيرها في صورتها النهائية.",
      images: [
        "/images/workshops/ac18.jpg",
        "/images/workshops/ac1.jpg",
        "/images/workshops/ac2.jpg",
        "/images/workshops/ac5.jpg",
        "/images/workshops/ac6.jpg",
        "/images/workshops/ac11.jpg",
        "/images/workshops/ac13.jpg",
        "/images/workshops/ac14.jpg",
        "/images/workshops/ac15.jpg",
        "/images/workshops/ac16.jpg",
      ],
    },

    {
      title: "معرض فناني مآب والافتتاح الرسمي",
      date: "يونيو 2026",
      cover: "/images/workshops/open2.jpg",
      description:
        "بمناسبة الافتتاح الرسمي لمآب – مساحة فنية، يجمع هذا المعرض نخبة من الفنانين المشاركين في انطلاقة المساحة، مقدمًا مجموعة متنوعة من الأعمال الفنية في الخط العربي والتصوير الفوتوغرافي والفنون البصرية المعاصرة.",
      images: [
        "/images/workshops/open1.jpg",
        "/images/workshops/open2.jpg",
        "/images/workshops/open3.jpg",
        "/images/workshops/open4.jpg",
        "/images/workshops/open5.jpg",
        "/images/workshops/open6.jpg",
        "/images/workshops/open7.jpg",
        "/images/workshops/open8.jpg",
        "/images/workshops/open9.jpg",
        "/images/workshops/open10.jpg",
        "/images/workshops/open11.jpg",
        "/images/workshops/open12.jpg",
        "/images/workshops/open13.jpg",
        "/images/workshops/open14.jpg",
        "/images/workshops/open15.jpg",
        "/images/workshops/open16.jpg",
        "/images/workshops/open17.jpg",
      ],
    },

    {
      title: "ورشة محاكاة أعمال الفنان بيكاسو",
      date: "24 إلى 28 يونيو 2026",
      cover: "/images/workshops/pic4.jpg",
      description:
        "ورشة فنية للأطفال تعرّف خلالها الفنانون الصغار على قصة الفنان العالمي بابلو بيكاسو، ونبذة عن الاتجاه الفني التكعيبي، وأساسيات نظرية الألوان، والظل والنور، وفهم خامة الأكريليك وأنواع الفرش، وصولاً إلى تطبيق عملي لرسمة مستوحاة من أعمال الفنان بيكاسو.",
      images: [
        "/images/workshops/pic1.jpg",
        "/images/workshops/pic2.jpg",
        "/images/workshops/pic3.jpg",
        "/images/workshops/pic4.jpg",
        "/images/workshops/pic5.jpg",
        "/images/workshops/pic6.jpg",
        "/images/workshops/pic7.jpg",
        "/images/workshops/pic8.jpg",
        "/images/workshops/pic9.jpg",
        "/images/workshops/pic10.jpg",
      ],
    },

    {
      title: "لقيا ليقا",
      date: "الخميس 5 يونيو 2026",
      cover: "/images/workshops/liqa4.jpg",
      description:
        "تجمع للخطاطين بالتعاون مع ليكا السعودية، تضمن عرض مجموعة من الأعمال الخطية وجلسات كتابة مباشرة وتبادل الخبرات بين الخطاطين.",
      images: [
        "/images/workshops/liqa1.jpg",
        "/images/workshops/liqa2.jpg",
        "/images/workshops/liqa3.jpg",
        "/images/workshops/liqa4.jpg",
        "/images/workshops/liqa5.jpg",
        "/images/workshops/liqa6.jpg",
        "/images/workshops/liqa7.jpg",
        "/images/workshops/liqa8.jpg",
        "/images/workshops/liqa9.jpg",
        "/images/workshops/liqa10.jpg",
      ],
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <main className="page">
      {!selectedEvent ? (
        <>
          <h1 className="title">الورش والفعاليات</h1>

          <p className="intro">
            مساحة للتعلّم، والتجربة، والإبداع. تقدم مآب ورشًا وبرامج متخصصة في
            الفنون والثقافة والحرف والهوية، بإشراف نخبة من الممارسين والمتخصصين.
          </p>

          <section>
            <h2 className="section-title">الورش والفعاليات القادمة</h2>

            <div className="grid">
              {upcomingWorkshops.map((workshop, index) => (
                <div key={index} className="card">
                  <img
                    src={workshop.cover}
                    alt={workshop.title}
                    onClick={() => {
                      if ("images" in workshop && workshop.images) {
                        setSelectedEvent(workshop);
                      }
                    }}
                  />

                  <div className="content">
                    <h3>{workshop.title}</h3>

                    <p>{workshop.description}</p>

                    {"instructor" in workshop && workshop.instructor && (
                      <p className="meta">
                        المدرب/ـة: {workshop.instructor}
                      </p>
                    )}

                    {"date" in workshop &&
                      workshop.date && (
                        <p className="meta">
                          التاريخ: {workshop.date}
                        </p>
                      )}

                    {"time" in workshop &&
                      workshop.time && (
                        <p className="meta">
                          الوقت: {workshop.time}
                        </p>
                      )}

                    <p className="meta">
                      الموقع: {workshop.location}
                    </p>

                    {workshop.registrationStatus === "open" &&
                    workshop.registerLink ? (
                      <>
                        <a
                          href={workshop.registerLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {"buttonText" in workshop && workshop.buttonText
                            ? workshop.buttonText
                            : "التسجيل"}
                        </a>

                        {"note" in workshop && workshop.note && (
                          <p className="contact-note">
                            {workshop.note}
                          </p>
                        )}

                        {"images" in workshop && workshop.images && (
                          <button
                            className="details-btn"
                            onClick={() => setSelectedEvent(workshop)}
                          >
                            عرض التفاصيل
                          </button>
                        )}
                      </>
                    ) : (
                      <div className="status-badge">
                        {"seats" in workshop
                          ? workshop.seats
                          : "قريبًا"}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="past-section">
            <h2 className="section-title">فعاليات سابقة</h2>

            <div className="grid">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => setSelectedEvent(event)}
                >
                  <img src={event.cover} alt={event.title} />

                  <div className="content">
                    <h3>{event.title}</h3>

                    <p className="meta">{event.date}</p>

                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="details">
          <button
            className="back"
            onClick={() => setSelectedEvent(null)}
          >
            العودة
          </button>

          <h1>{selectedEvent.title}</h1>

          {selectedEvent.date && (
            <p className="date">
              {selectedEvent.date}
            </p>
          )}

          <p className="description">
            {selectedEvent.description}
          </p>

          {selectedEvent.registrationStatus === "open" &&
            selectedEvent.registerLink && (
              <div className="details-registration">
                <a
                  href={selectedEvent.registerLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  {selectedEvent.buttonText || "التسجيل"}
                </a>

                {selectedEvent.note && (
                  <p className="contact-note">
                    {selectedEvent.note}
                  </p>
                )}
              </div>
            )}

          {selectedEvent.images && (
            <div className="gallery">
              {selectedEvent.images.map(
                (img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={selectedEvent.title}
                  />
                )
              )}
            </div>
          )}
        </section>
      )}

      <style jsx>{`
        .page {
          padding: 120px 20px;
          max-width: 1200px;
          margin: auto;
          color: white;
          text-align: center;
        }

        .title {
          margin-bottom: 20px;
        }

        .intro {
          max-width: 800px;
          margin: 0 auto 50px;
          color: #ccc;
          line-height: 2;
        }

        .section-title {
          color: #f2d23b;
          margin-bottom: 25px;
          font-size: 26px;
        }

        .past-section {
          margin-top: 80px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 360px)
          );
          justify-content: center;
          gap: 25px;
        }

        .card {
          cursor: pointer;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          overflow: hidden;
          transition: 0.3s;
          text-align: right;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: #f2d23b;
        }

        .card img {
          width: 100%;
          height: 260px;
          object-fit: contain;
          background: #111;
          display: block;
        }

        .content {
          padding: 22px;
        }

        .content h3 {
          margin-bottom: 12px;
          font-size: 22px;
        }

        .content p {
          color: #ccc;
          line-height: 1.8;
          font-size: 14px;
        }

        .meta {
          color: #aaa !important;
          margin: 6px 0;
        }

        .btn {
          display: inline-block;
          margin-top: 18px;
          background: #f2d23b;
          color: black;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
        }

        .status-badge {
          display: inline-block;
          margin-top: 18px;
          background: transparent;
          color: #f2d23b;
          border: 1px solid #f2d23b;
          padding: 12px 26px;
          border-radius: 999px;
          font-weight: bold;
        }

        .contact-note {
          color: #aaa !important;
          font-size: 13px !important;
          line-height: 1.8 !important;
          margin-top: 14px !important;
        }

        .details-btn {
          display: block;
          margin-top: 12px;
          background: transparent;
          border: none;
          color: #f2d23b;
          cursor: pointer;
          font-family: inherit;
          font-weight: bold;
          padding: 0;
        }

        .details {
          max-width: 1000px;
          margin: auto;
        }

        .back {
          background: transparent;
          color: #f2d23b;
          border: 1px solid #f2d23b;
          padding: 10px 22px;
          border-radius: 999px;
          cursor: pointer;
          margin-bottom: 30px;
        }

        .date {
          color: #f2d23b;
          margin: 10px 0 20px;
        }

        .description {
          color: #ccc;
          line-height: 2;
          max-width: 750px;
          margin: 0 auto 30px;
        }

        .details-registration {
          margin-bottom: 40px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(220px, 1fr)
          );
          gap: 16px;
        }

        .gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
        }

        @media (max-width: 600px) {
          .page {
            padding: 80px 14px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .gallery {
            grid-template-columns: 1fr;
          }

          .gallery img {
            height: auto;
          }
        }
      `}</style>
    </main>
  );
}