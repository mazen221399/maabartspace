"use client";

import { useState } from "react";

export default function ArtistsPage() {

  const artists = [
    { name: "Mazin Andijani", image: "/images/artists/mazin.jpg" },
    { name: "Fahad Alammar", image: "/images/artists/fahad.jpg" },
    { name: "Tajalyat", image: "/images/artists/tajalyat.jpg" },
    { name: "Basma Moktar", image: "/images/artists/basma.jpg" },
    { name: "Stuart Williams", image: "/images/artists/stuart.jpg" },
    { name: "Ahmed Alsaeed", image: "/images/artists/ahmed.jpg" },
    { name: "Diana Alzaatre", image: "/images/artists/diana.jpg" },
  ];

  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="page">

      <h1 className="title">الفنانون</h1>

      <div className="grid">
        {artists.map((artist, i) => (
          <div key={i} className="card" onClick={() => setSelected(artist)}>
            <img src={artist.image} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} />
            <p className="title-modal">{selected.name}</p>
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

        /* ===== نفس حركة الأعمال ===== */
        .card {
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow:
            0 0 0 2px #f2d23b,
            0 10px 30px rgba(242, 210, 59, 0.2);
        }

        .card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .card p {
          margin-top: 8px;
        }

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
          max-height: 65vh;
        }

        .title-modal {
          color: white;
        }
      `}</style>

    </main>
  );
}