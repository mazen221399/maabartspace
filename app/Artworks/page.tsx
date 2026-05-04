"use client";

import { useState } from "react";

export default function ArtworksPage() {

  const artworks = [
    { image: "/images/artworks/fahad1.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/fahad2.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/hadeethalbab.jpg", title: "حديث الباب" },
    { image: "/images/artworks/hahaha.jpg", title: "هههه" },
    { image: "/images/artworks/hoa1.jpg", title: "هو علي هين" },

    // 👇 باقي أعمالك
    { image: "/images/artworks/hoa2.jpg", title: "هو علي هين 2" },
    { image: "/images/artworks/mknonat.jpg", title: "مكنونات" },
    { image: "/images/artworks/onfowan.jpg", title: "عنفوان امرأة" },
    { image: "/images/artworks/ziyarah.jpg", title: "زيارة" },
    { image: "/images/artworks/womenstrenth.jpg", title: "جبروت امرأة" },
    { image: "/images/artworks/najdiat.jpg", title: "نجديات" },
  ];

  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="page">

      <h1 className="title">الأعمال</h1>

      <div className="grid">
        {artworks.map((art, i) => (
          <div key={i} className="card" onClick={() => setSelected(art)}>
            <img src={art.image} alt={art.title} />
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} />
            <p className="title-modal">{selected.title}</p>
          </div>
        </div>
      )}

      <style jsx>{`

        .page {
          padding: 120px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .title {
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 🔥 الأبيض والأسود */
        .card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          filter: grayscale(100%);
          transition: 0.4s ease;
          cursor: pointer;
        }

        .card:hover img {
          filter: grayscale(40%);
        }

        /* ===== MODAL ===== */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal img {
          max-width: 90vw;
          max-height: 70vh;
          filter: none; /* يرجع اللون */
        }

        .title-modal {
          color: white;
          margin-top: 10px;
        }

      `}</style>

    </main>
  );
}