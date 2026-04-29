"use client";

import { useState } from "react";

export default function ArtistsPage() {

  const artists = [
    {
      name: "Ahmed Alsaeed",
      category: "photography",
      role: "Photography",
      image: "/images/ahmed1.jpg",
    },
    {
      name: "Basma Moktar",
      category: "visual",
      role: "Visual Art & Sculpting",
      image: "/images/basma.jpg",
    },
    {
      name: "Dina Alazaatre",
      category: "visual",
      role: "Visual Art",
      image: "/images/dina1.jpg",
    },
    {
      name: "Fahad Alammar",
      category: "visual",
      role: "Visual Art",
      image: "/images/fahad1.jpg",
    },
    {
      name: "Mazin Andijani",
      category: "calligraphy",
      role: "Calligraphy",
      image: "/images/mazin1.jpg",
    },
    {
      name: "Dr. Sawsan Alsajjan",
      category: "visual",
      role: "Visual Art",
      image: "/images/sawsan.jpg",
    },
    {
      name: "Stuart Williams",
      category: "photography",
      role: "Photography",
      image: "/images/stuart.jpg",
    },
    {
      name: "Tajaliyat",
      category: "calligraphy",
      role: "Calligraphy & Illumination",
      image: "/images/tjlyat.jpg",
    },
  ];

  const [filter, setFilter] = useState("all");

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
          <div key={i} className="card">
            <img src={artist.image} alt={artist.name} />
            <p className="name">{artist.name}</p>
            <p className="role">{artist.role}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page {
          padding: 120px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .title {
          margin-bottom: 20px;
        }

        /* ===== FILTER ===== */
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
          transition: 0.3s;
        }

        .filters button.active,
        .filters button:hover {
          background: #f2d23b;
          color: black;
        }

        /* ===== GRID ===== */
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
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
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
      `}</style>

    </main>
  );
}