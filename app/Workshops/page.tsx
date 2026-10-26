"use client";

import { useState } from "react";

export default function WorkshopsPage() {
  const upcomingWorkshops = [
   



{
  type: "workshop",
  title: "ورشة الطباعة باللينو",
  instructor: "",
  date: "26 سبتمبر 2026",
  time: "من 7:00 مساءً إلى 9:30 مساءً",
  seats: "تم إغلاق التسجيل لاكتمال العدد",
  location: "مآب - قرطبة، الرياض",
  cover: "/images/workshops/lino4.jpg",
  description:
    "ورشة تطبيقية للتعرف على فن الطباعة باللينو، بدءًا من إعداد التصميم والحفر على سطح اللينو، وصولًا إلى تحبير القالب وتنفيذ الطبعة الفنية. تجربة عملية تتيح للمشاركين التعرف على أساسيات هذه التقنية وتنفيذ أعمالهم الخاصة.",
  registrationStatus: "closed",
  registerLink: "",
},


    {
  type: "workshop",
  title: "خِذ رَجّال",
  instructor: "سالم بن حزام وعبدالله الروكان",
  date: "سيتم الإعلان عن الموعد الجديد قريبًا",
  time: "",
  seats: "تم تأجيل البرنامج",
  location: "مآب - قرطبة، الرياض",
  cover: "/images/workshops/fn22.jpg",
  description:
    "ثلاثة أيام من سنع المجلس إلى زين الملبس. برنامج يقدمه الباحث في العادات والتقاليد سالم بن حزام وخبير المظهر السعودي عبدالله الروكان، يتعرف خلاله المشاركون على علوم الرجال وأصول المجالس؛ من استقبال الضيف وإكرامه، والترحيب والردود، وآداب الحديث والإنصات، وعلوم الضيافة والقهوة، وتقدير الكبير وسنع المجلس. وينتقل البرنامج من سنع المجلس إلى زين الملبس، بالتعرف على أصول الثوب والغترة والبشت، ومتى وكيف تُلبس بما يليق بالمقام. علوم أخذناها من أهلنا، وحان الوقت ياخذها عيالنا.",
  registrationStatus: "closed",
  registerLink: "",
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
      title: "ذاكرة رقمية",
      date: "22 – 24 أكتوبر 2026",
      cover: "/images/workshops/d27.jpg",
      description:
        "معرض فني جماعي يحتفي بالفن الرقمي بوصفه مساحة معاصرة للإبداع والتعبير البصري. ضم المعرض أعمالًا أُنتجت جميعها باستخدام الوسائط الرقمية، وقدّم ثمانية فنانين رؤاهم وأساليبهم المتنوعة في استحضار الذاكرة والتجارب الإنسانية بلغة بصرية معاصرة. الفنانون المشاركون: بسمة مختار، إلياس كلنتن، مازن منصور، سارة بن عبود، مروة أبو العينين، مها الزهراني، إبراهيم البلال، وغصون سعود. أُقيم المعرض في مآب، مساحة فنية بمدينة الرياض، خلال الفترة من 22 إلى 24 أكتوبر 2026.",
      images: [
        "/images/workshops/d27.jpg",
        "/images/workshops/d8.jpg",
        "/images/workshops/d19.jpg",
        "/images/workshops/d3.jpg",
        "/images/workshops/d31.jpg",
        "/images/workshops/d14.jpg",
        "/images/workshops/d6.jpg",
        "/images/workshops/d24.jpg",
        "/images/workshops/d11.jpg",
        "/images/workshops/d35.jpg",
        "/images/workshops/d2.jpg",
        "/images/workshops/d21.jpg",
        "/images/workshops/d16.jpg",
        "/images/workshops/d29.jpg",
        "/images/workshops/d5.jpg",
        "/images/workshops/d33.jpg",
        "/images/workshops/d12.jpg",
        "/images/workshops/d1.jpg",
        "/images/workshops/d25.jpg",
        "/images/workshops/d9.jpg",
        "/images/workshops/d18.jpg",
        "/images/workshops/d30.jpg",
        "/images/workshops/d4.jpg",
        "/images/workshops/d22.jpg",
        "/images/workshops/d15.jpg",
        "/images/workshops/d34.jpg",
        "/images/workshops/d7.jpg",
        "/images/workshops/d26.jpg",
        "/images/workshops/d10.jpg",
        "/images/workshops/d32.jpg",
        "/images/workshops/d13.jpg",
        "/images/workshops/d28.jpg",
        "/images/workshops/d17.jpg",
        "/images/workshops/d23.jpg",
        "/images/workshops/d20.jpg",
      ],
    },
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
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const closeImage = () => setActiveImageIndex(null);
  const changeImage = (direction: number) => {
    if (activeImageIndex === null || !selectedEvent?.images?.length) return;
    setActiveImageIndex((activeImageIndex + direction + selectedEvent.images.length) % selectedEvent.images.length);
  };

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
                  />

                  <div className="content">
                    <h3>{workshop.title}</h3>

                    <p>{workshop.description}</p>

                    {workshop.instructor && (
                      <p className="meta">
                        المدرب/ـة: {workshop.instructor}
                      </p>
                    )}

                    {workshop.date && (
                      <p className="meta">
                        التاريخ: {workshop.date}
                      </p>
                    )}

                    {workshop.time && (
                      <p className="meta">
                        الوقت: {workshop.time}
                      </p>
                    )}

                    <p className="meta">
                      الموقع: {workshop.location}
                    </p>

                    {workshop.registrationStatus === "open" &&
                    workshop.registerLink ? (
                      <a
                        href={workshop.registerLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        التسجيل
                      </a>
                    ) : (
                      <div className="status-badge">
                        {workshop.seats || "قريبًا"}
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
                  onClick={() => { setSelectedEvent(event); closeImage(); }}
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
            onClick={() => { setSelectedEvent(null); closeImage(); }}
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

          {selectedEvent.images && (
            <div className="gallery">
              {selectedEvent.images.map(
                (img: string, index: number) => (
                  <button
                    key={index}
                    type="button"
                    className="gallery-item"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`تكبير الصورة ${index + 1}`}
                  >
                    <img src={img} alt={`${selectedEvent.title} - الصورة ${index + 1}`} />
                  </button>
                )
              )}
            </div>
          )}
        </section>
      )}

      {selectedEvent && activeImageIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="عرض الصورة بحجم كبير" onClick={closeImage}>
          <button type="button" className="lightbox-close" onClick={closeImage} aria-label="إغلاق">×</button>
          <button type="button" className="lightbox-prev" onClick={(e) => { e.stopPropagation(); changeImage(-1); }} aria-label="الصورة السابقة">❮</button>
          <img
            src={selectedEvent.images[activeImageIndex]}
            alt={`${selectedEvent.title} - الصورة ${activeImageIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" className="lightbox-next" onClick={(e) => { e.stopPropagation(); changeImage(1); }} aria-label="الصورة التالية">❯</button>
          <div className="lightbox-counter">{activeImageIndex + 1} / {selectedEvent.images.length}</div>
        </div>
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

        .gallery {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(220px, 1fr)
          );
          gap: 16px;
        }

        .gallery-item {
          padding: 0;
          border: 0;
          background: transparent;
          cursor: zoom-in;
          border-radius: 14px;
          overflow: hidden;
        }

        .gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 55px 55px;
        }
        .lightbox img {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 6px;
        }
        .lightbox button {
          position: absolute;
          color: white;
          background: rgba(40, 40, 40, 0.75);
          border: 1px solid #777;
          border-radius: 50%;
          cursor: pointer;
          width: 42px;
          height: 42px;
          font-size: 25px;
          z-index: 2;
        }
        .lightbox-close { top: 16px; right: 16px; }
        .lightbox-prev { left: 10px; top: 50%; transform: translateY(-50%); }
        .lightbox-next { right: 10px; top: 50%; transform: translateY(-50%); }
        .lightbox-counter { position: absolute; bottom: 16px; color: #f2d23b; }

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