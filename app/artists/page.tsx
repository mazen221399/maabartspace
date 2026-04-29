"use client";

import { useState, useEffect } from "react";

export default function ArtistsPage() {

  const allArtists = [
    { name: "Ahmed Alsaeed", category: "photography", role: "Photography", image: "/images/ahmed1.jpg" },
    { name: "Basma Moktar", category: "visual", role: "Visual Art & Sculpting", image: "/images/basma.jpg" },
    { name: "Dina Alazaatre", category: "visual", role: "Visual Art", image: "/images/dina1.jpg" },
    { name: "Fahad Alammar", category: "visual", role: "Visual Art", image: "/images/fahad1.jpg" },
    { name: "Mazin Andijani", category: "calligraphy", role: "Calligraphy", image: "/images/mazin1.jpg" },
    { name: "Dr. Sawsan Alsajjan", category: "visual", role: "Visual Art", image: "/images/sawsan.jpg" },
    { name: "Stuart Williams", category: "photography", role: "Photography", image: "/images/steuart.jpg" },
    { name: "Tajaliyat", category: "calligraphy", role: "Calligraphy & Illumination", image: "/images/tjlyat.jpg" },
  ];

  const [filter, setFilter] = useState("all");
  const [artists, setArtists] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const basma = allArtists.find(a => a.name === "Basma Moktar");
    const others = allArtists.filter(a => a.name !== "Basma Moktar");
    const shuffled = others.sort(() => Math.random() - 0.5);
    setArtists([basma, ...shuffled]);
  }, []);

  const filteredArtists =
    filter === "all"
      ? artists
      : artists.filter((a) => a.category === filter);

  return (
    <main className="page">

      <h1 className="title">الفنانون</h1>

      {/* ===== FILTER ===== */}
      <div className="filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
        <button onClick={() => setFilter("calligraphy")} className={filter === "calligraphy" ? "active" : ""}>Calligraphy</button>
        <button onClick={() => setFilter("photography")} className={filter === "photography" ? "active" : ""}>Photography</button>
        <button onClick={() => setFilter("visual")} className={filter === "visual" ? "active" : ""}>Visual Art</button>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid">
        {filteredArtists.map((artist, i) => (
          <div key={i} className="card" onClick={() => setSelected(artist)}>
            <img src={artist.image} alt={artist.name} />
            <p className="name">{artist.name}</p>
            <p className="role">{artist.role}</p>
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} />
            <p className="title-modal">{selected.name}</p>
            <p className="meta">{selected.role}</p>
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

        .filters {
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filters button {
          padding: 8px 16px;
          border: 1px solid #f2d23b;
          background: transparent;
          color: #f2d23b;
          border-radius: 20px;
          cursor: pointer;
        }

        .filters button.active,
        .filters button:hover {
          background: #f2d23b;
          color: black;
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

        /* ===== CARD ===== */
        .card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* ⭐ الخط الأصفر المتحرك */
        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: linear-gradient(120deg, transparent, #f2d23b, transparent);
          opacity: 0;
          transition: 0.3s;
        }

        .card:hover::after {
          opacity: 0.6;
          animation: glowMove 2s linear infinite;
        }

        @keyframes glowMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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

        .name {
          margin-top: 8px;
          font-weight: bold;
        }

        .role {
          font-size: 13px;
          color: #ccc;
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
          max-height: 65vh;
        }

        .title-modal {
          color: white;
          margin-top: 10px;
        }

        .meta {
          color: #ccc;
        }
      `}</style>

    </main>
  );
}