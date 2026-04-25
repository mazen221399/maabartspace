"use client";

import { useState } from "react";

export default function ArtworksPage() {

  const artworks = [
    // 🔴 الأعمال الجديدة
    { image: "/images/s1.jpg", title: "بدون عنوان" },
    { image: "/images/s2.jpg", title: "بدون عنوان" },
    { image: "/images/s3.jpg", title: "بدون عنوان" },
    { image: "/images/s4.jpg", title: "بدون عنوان" },

    // 🔵 الأعمال القديمة بعد التعديل
    { image: "/images/hahaha.jpg", title: "هههه" },
    { image: "/images/rbbi.jpg", title: "رب اجعل لي آية" },
    { image: "/images/rohi.jpg", title: "روحه روحي" }
  ];

  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="page">

      <h1 className="title">الأعمال الفنية</h1>

      <div className="grid">
        {artworks.map((art, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelected(art)}
          >
            <img src={art.image} alt={art.title} />
            <p>{art.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected.image} alt="" />
            <p>{selected.title}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          padding: 100px 20px;
          max-width: 1100px;
          margin: auto;
          text-align: center;
        }

        .title {
          margin-bottom: 40px;
        }

        .grid {
          column-count: 3;
          column-gap: 15px;
        }

        .card {
          break-inside: avoid;
          margin-bottom: 15px;
          cursor: pointer;
        }

        .card img {
          width: 100%;
          border-radius: 6px;
          transition: 0.3s;
        }

        .card:hover img {
          transform: scale(1.02);
        }

        .card p {
          font-size: 13px;
          margin-top: 6px;
          color: #555;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }

        .modal img {
          max-width: 90vw;
          max-height: 80vh;
        }

        .modal p {
          color: white;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .grid {
            column-count: 2;
          }
        }
      `}</style>

    </main>
  );
}