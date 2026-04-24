"use client";

export default function ArtistsPage() {

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

  const others = [
    {
      image: "steuart.jpg",
      name: "Stuart Williams",
      specialty: "Photography",
    },
    {
      image: "ahmed1.jpg",
      name: "Ahmed Alsaeed",
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
      image: "mahdia.jpg",
      name: "Mahdia Altaleb",
      specialty: "Visual Art",
    },
  ];

  return (
    <main className="page">

      <h1 className="title">الفنانون</h1>

      <div className="grid featured">
        {featured.map((artist, index) => (
          <div key={index} className="card large">
            <img src={`/images/${artist.image}`} alt={artist.name} />
            <div className="overlay">
              <h2>{artist.name}</h2>
              <p>{artist.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid others">
        {others.map((artist, index) => (
          <div key={index} className="card">
            <img src={`/images/${artist.image}`} alt={artist.name} />
            <div className="overlay">
              <h2>{artist.name}</h2>
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
        }

        .title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 30px;
        }

        .grid {
          display: grid;
          gap: 14px;
          margin-bottom: 25px;
        }

        .featured {
          grid-template-columns: repeat(3, 1fr);
        }

        .others {
          grid-template-columns: repeat(3, 1fr);
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.3s;
        }

        .card:hover img {
          transform: scale(1.03);
        }

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 12px;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.7),
            rgba(0,0,0,0)
          );
          color: white;
          opacity: 0;
          transition: 0.3s;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .overlay h2 {
          font-size: 14px;
          margin: 0;
        }

        .overlay p {
          font-size: 11px;
          margin: 3px 0 0;
        }

        .large {
          height: 220px;
        }

        .card:not(.large) {
          height: 180px;
        }

        @media (max-width: 768px) {
          .featured {
            grid-template-columns: 1fr;
          }

          .others {
            grid-template-columns: repeat(2, 1fr);
          }

          .large {
            height: 200px;
          }

          .card:not(.large) {
            height: 160px;
          }
        }

      `}</style>

    </main>
  );
}