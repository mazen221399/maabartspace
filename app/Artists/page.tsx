"use client";

export default function ArtistsPage() {
  const artists = [
    {
      image: "/images/basma.jpg",
      name: "Basma Moktar",
      specialty: "Visual Art & Sculpting",
    },
    {
      image: "/images/mazin1.jpg",
      name: "Mazin Andijani",
      specialty: "Arabic Calligraphy",
    },
    {
      image: "/images/fahad1.jpg",
      name: "Fahad Alammar",
      specialty: "Visual Art",
    },
    {
      image: "/images/tjlyat.jpg",
      name: "Tajalyat",
      specialty: "Arabic Calligraphy & Ornamentation",
    },
    {
      image: "/images/mahdia.jpg",
      name: "Mahdia Altaleb",
      specialty: "Visual Art",
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

  return (
    <main className="page">
      <h1 className="title">الفنانون</h1>

      <div className="grid">
        {artists.map((artist, i) => (
          <div key={i} className="card">
            <img src={artist.image} alt={artist.name} />

            <div className="info">
              <h3>{artist.name}</h3>
              <p>{artist.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page {
          padding: 40px 20px;
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        .title {
          font-size: 26px;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card {
          background: white;
        }

        .card img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 6px;
          transition: 0.3s;
        }

        .card img:hover {
          transform: scale(1.03);
        }

        .info {
          margin-top: 10px;
        }

        .info h3 {
          margin: 0;
          font-size: 15px;
        }

        .info p {
          margin: 4px 0 0;
          font-size: 12px;
          color: gray;
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