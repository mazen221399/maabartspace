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

    {
      image: "/images/artworks/hoa1.jpg",
      title: "هو علي",
      artist: "مازن أنديجاني",
      description: `تكوين خطي لعبارة "هو علي" بخط الثلث،
منفذ على ورق طبيعي مقهر من بوتان باستخدام مزيج من الألوان الطبيعية والصناعية،
في معالجة بصرية متوازنة تجمع بين العفوية والانضباط.`,
    },

    {
      image: "/images/artworks/hoa2.jpg",
      title: "هو علي",
      artist: "مازن أنديجاني",
      description: `صياغة بصرية لعبارة "هو علي" بخط الثلث،
منفذة على ورق طبيعي مقهر من بوتان بألوان طبيعية وصناعية،
تعكس تناغماً بين التكوين الحروفي والإيقاع اللوني.`,
    },
  ];

  return (
    <main style={{ padding: "40px" }}>
      
      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {artworks.map((art, index) => (
          <img
            key={index}
            src={art.image}
            style={{
              width: "100%",
              maxWidth: "320px",
              height: "auto",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => setSelected(art)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        ))}
      </div>

      {/* Popup */}
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
            style={{
              maxWidth: "700px",
              color: "white",
              textAlign: "center",
            }}
          >
            <img
              src={selected.image}
              style={{
                width: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />

            <h2>{selected.artist}</h2>
            <h3>{selected.title}</h3>

            <p style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}