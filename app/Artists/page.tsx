"use client";
import { useState } from "react";

export default function ArtistsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artists = [
    // 🔥 أول صورة
    "mazin2",

    "artist1",
    "stuart",
    "ahmed",
    "redafarhan",
    "tajaliat",
    "dina",

    // 🔥 آخر صورة
    "artist2",
  ];

  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الفنانون</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto 50px",
        }}
      >
        {artists.map((artist) => (
          <div
            key={artist}
            style={{
              border: "2px solid #FEDD00",
              padding: "8px",
              borderRadius: "8px",
              background: "#fff",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => setSelectedImage(`/images/${artist}.jpg`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={`/images/${artist}.jpg`}
              alt={artist}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </div>
        ))}
      </section>

      {/* تكبير الصورة */}
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
            zIndex: 9999,
            padding: "20px",
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

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "25px" }}>
        للتعرف عن قرب على فنانينا، الرجاء زيارة حسابنا في إنستجرام
      </p>

      <a
        href="https://instagram.com/maab.artspace"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 30px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FEDD00";
          e.currentTarget.style.color = "#000";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#000";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        📸 Instagram account
      </a>
    </main>
  );
}