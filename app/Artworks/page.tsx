"use client";
import { useState } from "react";

export default function ArtworksPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworks = [
    // 🔹 أعمال سابقة
    { file: "sisters", name: "Sisters" },
    { file: "confusion", name: "Confusion" },
    { file: "joy", name: "Joy" },
    { file: "migraine", name: "Migraine" },

    { file: "hahaha", name: "اتصالات حرف الهاء" },
    { file: "hoa1", name: "هو علي هيّن" },
    { file: "hoa2", name: "هو علي هيّن" },
    { file: "rbbi", name: "ربّ اجعل لي آية" },
    { file: "rohi", name: "روحه روحي" },
    { file: "kldaqat", name: "كل دقة قلب" },

    { file: "fahad1", name: "عمل لفهد العمار" },
    { file: "fahad2", name: "عمل لفهد العمار" },

    // 🔥 الأعمال الجديدة (آخر شيء)
    { file: "najdiat", name: "نجديات" },
    { file: "womenstrength", name: "جبروت امرأة" },
    { file: "hadeethalbab", name: "حديث الباب" },
    { file: "ziyarah", name: "زيارة" },
    { file: "onfowan", name: "عنفوان امرأة" },
    { file: "mknonat", name: "مكنونات" },
  ];

  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الأعمال الفنية</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto 50px",
        }}
      >
        {artworks.map((art) => (
          <div
            key={art.file}
            style={{
              border: "2px solid #FEDD00",
              padding: "10px",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() =>
              setSelectedImage(`/images/artworks/${art.file}.jpg`)
            }
          >
            <img
              src={`/images/artworks/${art.file}.jpg`}
              alt={art.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            <p style={{ margin: 0 }}>{art.name}</p>
          </div>
        ))}
      </section>

      {/* 🔥 Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <img
            src={selectedImage}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </main>
  );
}