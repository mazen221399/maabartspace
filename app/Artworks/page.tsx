"use client";

import { useState } from "react";

export default function Artworks() {
  const [selected, setSelected] = useState<any>(null);

  const artworks = [
    {
      image: "/images/artworks/sisters.jpg",
      title: "Sisters",
      artist: "بسمة مختار",
      description: `نسخة مطبوعة بدقة عالية
على سطح كانفاس
بمقاس 150 × 150 سم.`,
    },
    {
      image: "/images/artworks/confusion.jpg",
      title: "Confusion",
      artist: "بسمة مختار",
      description: `عمل أصلي
أكريليك على كانفاس.`,
    },
    {
      image: "/images/artworks/joy.jpg",
      title: "Joy",
      artist: "بسمة مختار",
      description: `عمل أصلي
أكريليك على كانفاس.`,
    },
    {
      image: "/images/artworks/migraine.jpg",
      title: "Migraine",
      artist: "بسمة مختار",
      description: `عمل أصلي
أكريليك على كانفاس.`,
    },
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
منفذ على ورق مقهر طبيعي من بوتان.`,
    },
    {
      image: "/images/artworks/rohi.jpg",
      title: "روحه روحي",
      artist: "مازن أنديجاني",
      description: `تركيب حروفي بخط الثلث والنسخ
على ورق طبيعي مقهر من بوتان.`,
    },
    {
      image: "/images/artworks/kldaqat.jpg",
      title: "كل دقة قلب",
      artist: "مازن أنديجاني",
      description: `عمل رقمي مدمج مع سطح أكريليك
30 × 30 سم
بالخط الكوفي المربع.`,
    },
    {
      image: "/images/artworks/fahad1.jpg",
      title: "بدون عنوان",
      artist: "فهد العمار",
      description: `أكريليك على كانفاس
220 × 150 سم
مع إطار خشبي.`,
    },
    {
      image: "/images/artworks/fahad2.jpg",
      title: "بدون عنوان",
      artist: "فهد العمار",
      description: `أكريليك على كانفاس
مع إطار خشبي.`,
    },
  ];

  return (
    <main style={{ padding: "40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
        }}
      >
        {artworks.map((art, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "8px",
              padding: "6px",
              background: "white",
            }}
            onClick={() => setSelected(art)}
          >
            <img
              src={art.image}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            {/* watermark */}
            <img
              src="/logo.jpg"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50px",
                opacity: 0.07,
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
                padding: "6px",
                fontSize: "14px",
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
                marginBottom: "20px",
              }}
            />

            <h2>{selected.artist}</h2>
            <h3>{selected.title}</h3>

            <p style={{ whiteSpace: "pre-line" }}>
              {selected.description}
            </p>

            <div style={{ marginTop: "20px" }}>
              <a
                href={`https://wa.me/966554520495?text=أرغب في اقتناء العمل: ${selected.title}`}
                target="_blank"
                style={{
                  padding: "10px 20px",
                  background: "#25D366",
                  color: "white",
                  margin: "5px",
                  display: "inline-block",
                }}
              >
                واتساب
              </a>

              <a
                href={`mailto:info@maabartspace.com`}
                style={{
                  padding: "10px 20px",
                  background: "#333",
                  color: "white",
                  margin: "5px",
                  display: "inline-block",
                }}
              >
                إيميل
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}