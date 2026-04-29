"use client";

import { useState, useEffect } from "react";

export default function ArtworksPage() {

  const artworksData = [
    { image: "/images/artworks/fahad1.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/fahad2.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/hadeethalbab.jpg", title: "حديث الباب" },
    { image: "/images/artworks/hahaha.jpg", title: "هههه" },
    { image: "/images/artworks/hoa1.jpg", title: "هو علي هين" },
    { image: "/images/artworks/hoa2.jpg", title: "هو علي هين" },
    { image: "/images/artworks/joy.jpg", title: "Joy" },
    { image: "/images/artworks/kldaqat.jpg", title: "كل دقة قلب" },

    { image: "/images/artworks/tarot1.jpg", title: "The Ark of Tarot 1" },
    { image: "/images/artworks/moored.jpg", title: "Moored" },
    { image: "/images/artworks/sted.jpg", title: "Stedfastness" },
    { image: "/images/artworks/mani.jpg", title: "Manifestation" },
    { image: "/images/artworks/whisper.jpg", title: "Whisper" },
    { image: "/images/artworks/tarot2.jpg", title: "The Ark of Tarot 2" },

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

    // ✅ الأعمال الجديدة
    {
      image: "/images/artworks/silent.jpg",
      title: "Silent Ascension",
      medium: "Oil on Canvas",
      size: "50 × 70 cm"
    },
    {
      image: "/images/artworks/girlandcat.jpg",
      title: "Girl and Cat",
      medium: "Oil on Canvas"
    }
  ];

  const [artworks, setArtworks] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  // 🔀 ترتيب عشوائي مرة واحدة
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
            <img src={art.image} alt={art.title} />
            <p>{art.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} />
            <p className="title-modal">{selected.title}</p>

            {selected.medium && <p className="meta">{selected.medium}</p>}
            {selected.size && <p className="meta">{selected.size}</p>}

            <div className="actions">

              <a
                href={`https://wa.me/966554520495?text=أرغب في اقتناء العمل: ${selected.title}`}
                target="_blank"
                className="btn whatsapp"
              >
                طلب اقتناء – واتساب
              </a>

              <a
                href={`mailto:info@maabartspace.com?subject=طلب اقتناء&body=أرغب في اقتناء العمل: ${selected.title}`}
                className="btn email"
              >
                طلب اقتناء – إيميل
              </a>

            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          padding: 100px 20px;
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .grid {
          column-count: 4;
          column-gap: 15px;
        }

        @media (max-width: 1200px) { .grid { column-count: 3; } }
        @media (max-width: 900px) { .grid { column-count: 2; } }
        @media (max-width: 500px) { .grid { column-count: 2; } }

        .card {
          break-inside: avoid;
          margin-bottom: 15px;
          cursor: pointer;
        }

        .card img {
          width: 100%;
          border-radius: 6px;
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
          font-weight: 600;
        }

        .meta {
          color: #ccc;
          font-size: 13px;
          margin-top: 4px;
        }

        .actions {
          margin-top: 20px;
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .btn {
          padding: 10px 16px;
          font-size: 13px;
          border-radius: 6px;
          text-decoration: none;
          transition: 0.3s;
        }

        .whatsapp {
          background: #25D366;
          color: white;
        }

        .whatsapp:hover {
          background: #1da851;
        }

        .email {
          border: 1px solid white;
          color: white;
        }

        .email:hover {
          background: white;
          color: black;
        }
      `}</style>

    </main>
  );
}