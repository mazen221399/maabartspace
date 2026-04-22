"use client";
import { useState } from "react";

export default function ArtistsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artists = [
    {
      name: "مازن أنديجاني",
      role: ["Arabic Calligrapher"],
      file: "mazin2",
    },
    {
      name: "Stuart Williams",
      role: ["Photographer"],
      file: "stuart",
    },
    {
      name: "أحمد السعيد",
      role: ["Photographer"],
      file: "ahmed",
    },
    {
      name: "رضا فرحان",
      role: ["Sculptor"],
      file: "redafarhan",
    },
    {
      name: "دينا الزعاترة",
      role: ["Visual Artist"],
      file: "dina",
    },
    {
      name: "تجليات",
      role: ["Visual Artist", "Arabic Calligraphy & Ornamentation"],
      file: "tajliat",
    },
    {
      name: "فهد العمار",
      role: ["Painter"],
      file: "artist1",
    },
    {
      name: "مهدية آل طالب",
      role: ["Painter"],
      file: "artist2",
    },
  ];

  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الفنانون</h1>

      <section className="grid">
        {artists.map((artist) => {
          const imageSrc =
            artist.file === "tajliat"
              ? "/images/t3.jpg"
              : `/images/${artist.file}.jpg`;

          return (
            <div key={artist.file}>
              <div
                onClick={() => setSelectedImage(imageSrc)}
                className="card"
              >
                <img src={imageSrc} alt={artist.name} />

                {/* Overlay (Desktop only) */}
                <div className="overlay">
                  <p className="overlay-name">{artist.name}</p>
                  {artist.role.map((r, i) => (
                    <p key={i} className="overlay-role">
                      {r}
                    </p>
                  ))}
                </div>
              </div>

              {/* Mobile info */}
              <div className="mobile-info">
                <p className="name">{artist.name}</p>
                {artist.role.map((r, i) => (
                  <p key={i} className="role">
                    {r}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="lightbox"
        >
          <img src={selectedImage} />
        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          transition: 0.3s;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          opacity: 0;
          transition: 0.3s;
          padding-bottom: 20px;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .overlay-name {
          font-size: 16px;
          font-weight: 600;
        }

        .overlay-role {
          font-size: 13px;
          opacity: 0.85;
        }

        /* Mobile info hidden on desktop */
        .mobile-info {
          display: none;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 90%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .overlay {
            display: none;
          }

          .mobile-info {
            display: block;
            text-align: center;
            margin-top: 10px;
          }

          .name {
            font-size: 14px;
            font-weight: 500;
          }

          .role {
            font-size: 12px;
            color: #777;
          }
        }
      `}</style>
    </main>
  );
}