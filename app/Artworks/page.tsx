"use client";
import { useState } from "react";

export default function ArtworksPage() {
  const [selected, setSelected] = useState<any>(null);

  const artworks = [
    // 🔹 بسمة مختار
    { file: "sisters", name: "Sisters" },
    { file: "confusion", name: "Confusion" },
    { file: "joy", name: "Joy" },
    { file: "migraine", name: "Migraine" },

    // 🔹 مازن أنديجاني
    { file: "hahaha", name: "اتصالات حرف الهاء" },
    { file: "hoa1", name: "هو علي هيّن" },
    { file: "hoa2", name: "هو علي هيّن" },
    { file: "rbbi", name: "ربّ اجعل لي آية" },
    { file: "rohi", name: "روحه روحي" },
    { file: "kldaqat", name: "كل دقة قلب" },

    // 🔹 فهد العمار
    { file: "fahad1", name: "بدون عنوان" },
    { file: "fahad2", name: "بدون عنوان" },

    // 🔹 أعمال حديثة
    { file: "najdiat", name: "نجديات" },
    { file: "womenstrenth", name: "جبروت امرأة" },
    { file: "hadeethalbab", name: "حديث الباب" },
    { file: "ziyarah", name: "زيارة" },
    { file: "onfowan", name: "عنفوان امرأة" },
    { file: "mknonat", name: "مكنونات" },

    // 🔥 أحمد السعيد
    {
      file: "tarot1",
      name: "The Ark of Tarot 1",
      description: `طباعة فوتوغرافية بتقنية الغرفة المظلمة (Darkroom)
على إطار بمقاس 50 × 50 سم
من أعمال المصور أحمد السعيد.`,
    },
    {
      file: "moored",
      name: "Moored",
      description: `طباعة فوتوغرافية بتقنية الغرفة المظلمة (Darkroom)
على إطار بمقاس 50 × 50 سم
من أعمال المصور أحمد السعيد.`,
    },
    {
      file: "sted",
      name: "Steadfastness",
      description: `طباعة فوتوغرافية بتقنية الغرفة المظلمة (Darkroom)
على إطار بمقاس 50 × 50 سم
من أعمال المصور أحمد السعيد.`,
    },
    {
      file: "mani",
      name: "Manifestation",
      description: `طباعة فوتوغرافية بتقنية الغرفة المظلمة (Darkroom)
على إطار بمقاس 50 × 50 سم
من أعمال المصور أحمد السعيد.`,
    },
    {
      file: "whisper",
      name: "Whisper",
      description: `طباعة فوتوغرافية بتقنية الغرفة المظلمة (Darkroom)
على إطار بمقاس 50 × 50 سم
من أعمال المصور أحمد السعيد.`,
    },
    {
      file: "tarot2",
      name: "The Ark of Tarot 2",
      description: `طباعة فوتوغرافية بتقنية الغرفة المظلمة (Darkroom)
على إطار بمقاس 50 × 50 سم
من أعمال المصور أحمد السعيد.`,
    },
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
        {artworks.map((art, index) => (
          <div
            key={index}
            style={{
              border: "2px solid #FEDD00",
              padding: "10px",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => setSelected(art)}
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

      {selected && (
        <div
          onClick={() => setSelected(null)}
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
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "700px", color: "white" }}
          >
            <img
              src={`/images/artworks/${selected.file}.jpg`}
              style={{
                width: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            <h3>{selected.name}</h3>

            {selected.description && (
              <p style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
                {selected.description}
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}