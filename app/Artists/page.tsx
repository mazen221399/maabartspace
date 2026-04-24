"use client";

import { useState } from "react";

export default function ArtistsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ⭐ Featured
  const featured = [
    {
      image: "mazin1.jpg",
      name: "Mazin Andijani",
      specialty: "Arabic Calligraphy",
    },
    {
      image: "fahad1.jpg",
      name: "Fahad Alammar",
      specialty: "Visual Art",
    },
    {
      image: "tjlyat.jpg",
      name: "Tajalyat",
      specialty: "Arabic Calligraphy & Ornamentation",
    },
  ];

  // باقي الفنانين
  const others = [
    {
      image: "steuart.jpg",
      name: "Stuart Williams",
      specialty: "Photography",
    },
    {
      image: "sawsan.jpg",
      name: "Dr. Sawsan Sajan",
      specialty: "Visual Art",
    },
    {
      image: "dina1.jpg",
      name: "Diana Alzaatre",
      specialty: "Visual Art",
    },
    {
      image: "ahmed1.jpg",
      name: "Ahmed Alsaeed",
      specialty: "Photography",
    },
    {
      image: "mahdia.jpg",
      name: "Mahdia Altaleb",
      specialty: "Visual Art",
    },
    {
      image: "reda.jpg",
      name: "Redha Farhan",
      specialty: "Sculpting",
    },
  ];

  return (
    <main className="page">

      {/* عنوان */}
      <h1 className="title">ARTISTS</h1>

      {/* ⭐ Featured */}
      <section className="featured">
        {featured.map((artist) => (
          <div
            key={artist.name}
            className="card large"
            onClick={() => setSelectedImage(`/images/${artist.image}`)}
          >
            <img src={`/images/${artist.image}`} />

            <div className="overlay">
              <h2>{artist.name}</h2>
              <p>{artist.specialty}</p>
            </div>
          </div>
        ))}
      </section>

      {/* باقي الفنانين */}
      <section className="grid">
        {others.map((artist) => (
          <div
            key={artist.name}
            className="card"
            onClick={() => setSelectedImage(`/images/${artist.image}`)}
          >
            <img src={`/images/${artist.image}`} />

            <div className="overlay small">
              <h3>{artist.name}</h3>
              <p>{artist.specialty}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} />
        </div>
      )}

      <style jsx>{`
        .page {
          padding: 60px 20px;
          text-align: center;
        }

        .title {
          margin-bottom: 40px;
          letter-spacing: 8px;
        }

        /* Featured */
        .featured {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 30px;
        }

        .large {
          height: 420px;
        }

        /* Grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        /* Cards */
        .card {
          position: relative;
          height: 280px;
          cursor: pointer;
          overflow: hidden;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          padding: 20px;
          text-align: left;
        }

        .overlay.small {
          padding: 12px;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 90%;
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          .featured {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .large {
            height: 320px;
          }
        }
      `}</style>
    </main>
  );
}