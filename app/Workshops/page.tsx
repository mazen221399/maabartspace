"use client";

import { useState } from "react";

export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      title: "محاكاة أعمال بابلو بيكاسو",
      instructor: "الفنانة آمنة يعقوب",
      date: "24 إلى 28 يونيو 2026",
      time: "من 6 مساءً إلى 8 مساءً",
      seats: "المقاعد محدودة",
      location: "مآب - قرطبة، الرياض",
      cover: "/images/workshops/picaso1.jpg",
      description:
        "ورشة فنية للصغار للتعرف على قصة الفنان العالمي بابلو بيكاسو، والاتجاه التكعيبي، وأساسيات الألوان والظل والنور، مع تطبيق عملي لمحاكاة إحدى رسوماته باستخدام ألوان الأكريليك.",
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSejqHdNbDMYCYB-iyPSoXwkZhlEXKqJyF3txHHr_999JJxi1A/viewform?usp=sharing&ouid=101460317983873958162",
    },
  ];

  const pastEvents = [
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

          <section>
            <h2 className="section-title">الورش القادمة</h2>

            <div className="grid">
              {upcomingWorkshops.map((workshop, index) => (
                <div key={index} className="card">
                  <img src={workshop.cover} alt={workshop.title} />
                  <div className="content">
                    <h3>{workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <p className="meta">المدربة: {workshop.instructor}</p>
                    <p className="meta">التاريخ: {workshop.date}</p>
                    <p className="meta">الوقت: {workshop.time}</p>
                    <p className="meta">الموقع: {workshop.location}</p>
                    <p className="meta">{workshop.seats}</p>

                    <a
                      href={workshop.registerLink}
                      target="_blank"
                      className="btn"
                    >
                      التسجيل
                    </a>
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
          <button className="back" onClick={() => setSelectedEvent(null)}>
            العودة
          </button>

          <h1>{selectedEvent.title}</h1>
          <p className="date">{selectedEvent.date}</p>
          <p className="description">{selectedEvent.description}</p>

          <div className="gallery">
            {selectedEvent.images.map((img: string, index: number) => (
              <img key={index} src={img} alt={selectedEvent.title} />
            ))}
          </div>
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
          margin-bottom: 50px;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
          height: 220px;
          object-fit: cover;
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
          margin: 0 auto 45px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
        }
      `}</style>
    </main>
  );
}