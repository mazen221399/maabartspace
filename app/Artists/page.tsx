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
      image: "stuart.jpg",
      name: "Stuart Williams",
      specialty: "Photography",
    },
    {
      image: "ahmed1.jpg",
      name: "Ahmed Alsaeed",
      specialty: "Photography",
    },
    {
      image: "dina1.jpg",
      name: "Diana Alzaatre",
      specialty: "Visual Art",
    },
    {
      image: "sawsan.jpg",
      name: "Dr. Sawsan Sajan",
      specialty: "Visual Art",
    },
    {
      image: "mahdia.jpg",
      name: "Mahdia Altaleb",
      specialty: "Visual Art",
    },
    {
      image: "reda.jpg", // 👈 تأكد هذا الاسم مطابق 100%
      name: "Reda Farhan",
      specialty: "Sculpting",
    },
  ];

  const renderCard = (artist: any, large = false) => (
    <div className={`card ${large ? "large" : ""}`}>
      <div className="image">
        <img
          src={`/images/${artist.image}`}
          alt={artist.name}
        />
      </div>

      <div className="overlay">
        <h3>{artist.name}</h3>
        <p>{artist.specialty}</p>
      </div>
    </div>
  );

  return (
    <main className="page">
      <h1>الفنانون</h1>

      <div className="grid featured">
        {featured.map((a, i) => (
          <div key={i}>{renderCard(a, true)}</div>
        ))}
      </div>

      <div className="grid others">
        {others.map((a, i) => (
          <div key={i}>{renderCard(a)}</div>
        ))}
      </div>

      <style jsx>{`
        .page {
          padding: 60px 20px;
          max-width: 1200px;
          margin: auto;
        }

        h1 {
          text-align: center;
          margin-bottom: 60px;
          font-size: 32px;
        }

        .grid {
          display: grid;
          gap: 20px;
        }

        .featured {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          margin-bottom: 40px;
        }

        .others {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .image {
          width: 100%;
          height: 260px;
        }

        .large .image {
          height: 350px;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          text-align: center;
        }

        .overlay h3 {
          margin: 0;
          font-size: 16px;
        }

        .overlay p {
          margin: 5px 0 0;
          font-size: 12px;
          opacity: 0.8;
        }

        @media (max-width: 600px) {
          .featured {
            grid-template-columns: 1fr;
          }

          .others {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  );
}