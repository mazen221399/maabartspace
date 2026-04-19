"use client";

import { useState } from "react";

export default function Artworks() {
  const [selected, setSelected] = useState<any>(null);

  const artworks = [
    {
      image: "/images/artworks/hahaha.jpg",
      title: "اتصالات حرف الهاء – خط الثلث",
      artist: "مازن أنديجاني",
      description: `تجسيد بصري لحالة السعادة من خلال تنوع أشكال نطق حرف الهاء،
بمعالجة عفوية وتكوينات حرة ضمن قواعد خط الثلث.

حبر على ورق مقهر طبيعي (بوتان)
أحبار Schmincke وأحبار صينية طبيعية

56 × 81 سم
عمل أصلي (1/1)`,
    },
  ];

  return (
    <main style={{ padding: "40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
        }}
      >
        {artworks.map((art, index) => (
          <img
            key={index}
            src={art.image}
            style={{
              width: "100%",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => setSelected(art)}
          />
        ))}
      </div>

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
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "800px", color: "white", textAlign: "center" }}
          >
            <img
              src={selected.image}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h2>{selected.artist}</h2>
            <h3>{selected.title}</h3>

            <p style={{ whiteSpace: "pre-line" }}>
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}