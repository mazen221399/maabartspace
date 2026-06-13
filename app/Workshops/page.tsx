"use client";

import { useState } from "react";

export default function WorkshopsPage() {
  const workshops = [
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

  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);

  return (
    <main className="page">
      <h1 className="title">الورش والفعاليات</h1>

      {!selectedWorkshop ? (
        <div className="grid">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setSelectedWorkshop(workshop)}
            >
              <img src={workshop.cover} alt={workshop.title} />
              <h2>{workshop.title}</h2>
              <p>{workshop.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <section className="details">
          <button className="back" onClick={() => setSelectedWorkshop(null)}>
            العودة
          </button>

          <h1>{selectedWorkshop.title}</h1>
          <p className="date">{selectedWorkshop.date}</p>
          <p className="description">{selectedWorkshop.description}</p>

          <div className="gallery">
            {selectedWorkshop.images.map((img: string, index: number) => (
              <img key={index} src={img} alt={selectedWorkshop.title} />
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
          margin-bottom: 40px;
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
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: #f2d23b;
        }

        .card img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
        }

        .card h2 {
          margin: 18px 0 8px;
        }

        .card p {
          color: #ccc;
          margin-bottom: 20px;
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
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .gallery img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 14px;
        }
      `}</style>
    </main>
  );
}