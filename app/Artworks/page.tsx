"use client";

import { useState, useEffect } from "react";

export default function ArtworksPage() {

  const artworksData = [
    { image: "/images/artworks/fahad1.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/fahad2.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/hadeethalbab.jpg", title: "حديث الباب" },
    { image: "/images/artworks/hahaha.jpg", title: "هههه" },
    { image: "/images/artworks/hoa1.jpg", title: "هو علي هين" },
    { image: "/images/artworks/joy.jpg", title: "Joy" },

    /* ⭐ أعمال أحمد السعيد (بالأسماء الجديدة) */
    { image: "/images/artworks/tarot11.jpeg", title: "The Ark of Tarot 1" },
    { image: "/images/artworks/moo.jpeg", title: "Moored" },
    { image: "/images/artworks/stedf.jpeg", title: "Steadfastness" },
    { image: "/images/artworks/manis.jpeg", title: "Manifestation" },
    { image: "/images/artworks/whis.jpeg", title: "Whisper" },
    { image: "/images/artworks/tarot22.jpeg", title: "The Ark of Tarot 2" },

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
    { image: "/images/artworks/confusion.jpg", title: "Confusion" },

    { image: "/images/artworks/taa.jpg", title: "تاء مربوطة" },

    {
      image: "/images/artworks/silent.jpg",
      title: "Silent Ascendance",
      medium: "Oil on Canvas",
      size: "50 × 70 cm"
    },
    {
      image: "/images/artworks/girlandcat.JPG",
      title: "Night's Story",
      medium: "Oil on Canvas"
    },

    /* ⭐ اللوحة الثلاثية */
    {
      image: "/images/artworks/bigwheel.jpg",
      title: "Abandoned Big Wheel ثلاثية",
      full: true
    },

    { image: "/images/artworks/botsnam.jpg", title: "Botsnam" },
    { image: "/images/artworks/farasan.jpg", title: "Farasan" },
    { image: "/images/artworks/moonersrock.jpg", title: "Mooners Rock" },
    { image: "/images/artworks/rallyjameel.jpg", title: "Rally Jameel" },
    { image: "/images/artworks/reddune.jpg", title: "Red Dune" },
    { image: "/images/artworks/ubm.jpg", title: "عروق بني معارض" },
    { image: "/images/artworks/wildlife.jpg", title: "Wild Life" }
  ];

  const [artworks, setArtworks] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const shuffled = [...artworksData].sort(() => Math.random() - 0.5);
    setArtworks(shuffled);
  }, []);

  return (
    <main className="page">

      <h1 className="title">الأعمال الفنية</h1>

      <div className="grid">
        {artworks.map((art, i) => (
          <div key={i} className="card" onClick={() => setSelected(art)}>
            <img
              src={art.image}
              alt={art.title}
              className={art.full ? "full-img" : ""}
            />
            <p>{art.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <img src={selected.image} />
            <p className="title-modal">{selected.title}</p>

            <p className="acquire-title">طلب اقتناء</p>

            <div className="actions">
              <a
                href={`https://wa.me/966554520495?text=أرغب في اقتناء العمل: ${selected.title}`}
                target="_blank"
                className="btn gold"
              >
                واتساب
              </a>

              <a
                href={`mailto:info@maabartspace.com?subject=طلب اقتناء&body=أرغب في اقتناء العمل: ${selected.title}`}
                className="btn outline"
              >
                إيميل
              </a>
            </div>

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

        .full-img {
          object-fit: contain;
          background: black;
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
          margin-top: 10px;
        }

        .acquire-title {
          margin-top: 15px;
          font-size: 14px;
          color: #f2d23b;
        }

        .actions {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .btn {
          padding: 10px 18px;
          border-radius: 6px;
          font-size: 13px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .gold {
          background: #f2d23b;
          color: black;
        }

        .gold::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: 0.6s;
        }

        .gold:hover::after {
          left: 100%;
        }

        .outline {
          border: 1px solid #f2d23b;
          color: #f2d23b;
        }

        .outline:hover {
          background: #f2d23b;
          color: black;
        }
      `}</style>

    </main>
  );
}