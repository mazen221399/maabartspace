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
      title: "هو علي هيّن",
      artist: "مازن أنديجاني",
      description: `تكوين خطي لعبارة "هو علي هيّن" بخط الثلث،
منفذ على ورق طبيعي مقهر من بوتان بألوان طبيعية وصناعية.`,
    },

    {
      image: "/images/artworks/hoa2.jpg",
      title: "هو علي هيّن",
      artist: "مازن أنديجاني",
      description: `صياغة بصرية لعبارة "هو علي هيّن" بخط الثلث،
على ورق مقهر من بوتان بألوان طبيعية وصناعية.`,
    },

    {
      image: "/images/artworks/rbbi.jpg",
      title: "ربّ اجعل لي آية",
      artist: "مازن أنديجاني",
      description: `تركيب كلاسيكي بخط الثلث،
منفذ على ورق مقهر طبيعي من بوتان،
بمعالجة تقليدية تعكس أصالة التكوين الحروفي.`,
    },

    {
      image: "/images/artworks/rohi.jpg",
      title: "روحه روحي",
      artist: "مازن أنديجاني",
      description: `تركيب حروفي لعبارة "روحه روحي"
بمزج بين خطي الثلث والنسخ،
منفذ على ورق طبيعي مقهر من بوتان،
بمعالجة كلاسيكية تعكس الانسجام بين الكتلة والفراغ.`,
    },

    {
      image: "/images/artworks/kldaqat.jpg",
      title: "كل دقة قلب",
      artist: "مازن أنديجاني",
      description: `عمل رقمي مدمج مع سطح أكريليك
بمقاس 30 × 30 سم
منفذ بأسلوب الخط الكوفي المربع.`,
    },
  ];

  return (
    <main style={{ padding: "40px" }}>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {artworks.map((art, index) => (
          <div
            key={index}
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => setSelected(art)}
          >
            <img
              src={art.image}
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                background: "rgba(0,0,0,0.6)",
                color: "white",
                textAlign: "center",
                padding: "8px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              {art.title}
            </div>
          </div>
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

            <div style={{ marginTop: "25px" }}>
              <a
                href={`https://wa.me/966554520495?text=مرحباً، أرغب في اقتناء العمل: ${selected.title}`}
                target="_blank"
                style={{
                  display: "inline-block",
                  margin: "5px",
                  padding: "12px 22px",
                  background: "#25D366",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                طلب اقتناء (واتساب)
              </a>

              <a
                href={`mailto:info@maabartspace.com?subject=طلب اقتناء&body=أرغب في اقتناء العمل: ${selected.title}`}
                style={{
                  display: "inline-block",
                  margin: "5px",
                  padding: "12px 22px",
                  background: "#333",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                طلب اقتناء (إيميل)
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}