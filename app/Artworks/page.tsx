"use client";

import { useState } from "react";

export default function ArtworksPage() {

  const artworks = [
    { image: "/images/artworks/fahad1.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/fahad2.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/hadeethalbab.jpg", title: "حديث الباب" },
    { image: "/images/artworks/hahaha.jpg", title: "هههه" },
    { image: "/images/artworks/hoa1.jpg", title: "هو علي هين" },
    { image: "/images/artworks/hoa2.jpg", title: "هو علي هين" },
    { image: "/images/artworks/joy.jpg", title: "Joy" },
    
    { image: "/images/artworks/tarot1.jpg", title: "The Ark of Tarot 1" },
    { image: "/images/artworks/moored.jpg", title: "Moored" },
    { image: "/images/artworks/sted.jpg", title: "Stedfastness" },
    { image: "/images/artworks/mani.jpg", title: "Manifestation" },
    { image: "/images/artworks/whisper.jpg", title: "Whisper" },
    { image: "/images/artworks/tarot2.jpg", title: "The Ark of Tarot 2" },

    { image: "/images/artworks/mknonat.jpg", title: "مكنونات" },
    { image: "/images/artworks/najdiat.jpg", title: "نجديات" },
    { image: "/images/artworks/onfowan.jpg", title: "عنفوان امرأة" },

    { image: "/images/artworks/rbbi.jpg", title: "رب اجعل لي آية" },
    { image: "/images/artworks/rohi.jpg", title: "روحه روحي" },

    { image: "/images/artworks/s1.jpg", title: "Unnamed" },
    { image: "/images/artworks/s2.jpg", title: "Unnamed" },
    { image: "/images/artworks/s3.jpg", title: "Unnamed" },
    { image: "/images/artworks/s4.jpg", title: "Unnamed" },

    { image: "/images/artworks/sisters.jpg", title: "Sisters" },
    { image: "/images/artworks/womenstrength.jpg", title: "جبروت امرأة" },
    { image: "/images/artworks/ziyarah.jpg", title: "زيارة" },

    { image: "/images/artworks/confusion.jpg", title: "Confusion" }
  ];

  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="page">

      <h1 className="title">الأعمال الفنية</h1>

      <div className="grid">
        {artworks.map((art, i) => (
          <div key={i} className="card" onClick={() => setSelected(art)}>
            <img src={art.image} alt={art.title} />
            <p>{art.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected.image} />
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