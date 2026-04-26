"use client";

import { useState } from "react";

export default function ArtistsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const artists = [
    {
      image: "/images/basma.jpg",
      name: "Basma Moktar",
      specialty: "Visual Art",
    },
    {
      image: "/images/mazin1.jpg",
      name: "Mazin Andijani",
      specialty: "Calligraphy",
    },
    {
      image: "/images/fahad1.jpg",
      name: "Fahad Alammar",
      specialty: "Visual Art",
    },
    {
      image: "/images/tjlyat.jpg",
      name: "Tajalyat",
      specialty: "Calligraphy",
    },
    {
      image: "/images/ahmed1.jpg",
      name: "Ahmed Alsaeed",
      specialty: "Photography",
    },
    {
      image: "/images/steuart.jpg",
      name: "Stuart Williams",
      specialty: "Photography",
    },
    {
      image: "/images/sawsan.jpg",
      name: "Dr. Sawsan Sajan",
      specialty: "Visual Art",
    },
    {
      image: "/images/dina1.jpg",
      name: "Diana Alzaatre",
      specialty: "Visual Art",
    },
  ];

  const filters = ["All", "Visual Art", "Calligraphy", "Photography"];

  const filteredArtists =
    activeFilter === "All"
      ? artists
      : artists.filter((a) => a.specialty === activeFilter);

  return (
    <main className="page">
      <h1 className="title">الفنانون</h1>

      {/* Filters */}
      <div className="filters">
        {filters.map((f, i) => (
          <button
            key={i}
            className={activeFilter === f ? "active" : ""}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid">
        {filteredArtists.map((artist, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedImage(artist)}
          >
            <img src={artist.image} alt={artist.name} />

            <div className="overlay">
              <h3>{artist.name}</h3>
              <p>{artist.specialty}</p>
            </div>

            <div className="yellow-line"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.image} />
          <h3>{selectedImage.name}</h3>
        </div>
      )}

      <style jsx>{`
        .page {
          padding: 60px 20px;
          max-width: 1100px;
          margin: auto;
          text-align: center;
        }

        .title {
          font-size: 28px;
          margin-bottom: 30px;
        }

        /* Filters */
        .filters {
          margin-bottom: 30px;
        }

        .filters button {
          margin: 0 6px;
          padding: 6px 14px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          font-size: 12px;
        }

        .filters .active {
          border-color: #f4d000;
          color: black;
        }

        /* Grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
        }

        .card img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          transition: 0.4s;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          opacity: 0;
          transition: 0.4s;
        }

        .overlay h3 {
          color: white;
          margin: 0;
          font-size: 15px;
        }

        .overlay p {
          color: #ccc;
          font-size: 12px;
          margin-top: 4px;
        }

        .yellow-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: #f4d000;
          transition: 0.4s;
        }

        .card:hover img {
          transform: scale(1.08);
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .card:hover .yellow-line {
          width: 100%;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .lightbox img {
          max-width: 80%;
          max-height: 70%;
          border-radius: 10px;
        }

        .lightbox h3 {
          color: white;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  );
}