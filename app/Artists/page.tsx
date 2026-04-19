"use client";
import { useState } from "react";

export default function ArtistsPage() {
  const [activeArtist, setActiveArtist] = useState<string | null>(null);

  const artists = [
    { name: "artist1", bio: "Artist bio coming soon." },
    { name: "artist2", bio: "Artist bio coming soon." },
    { name: "mazin", bio: "Artist bio coming soon." },
    { name: "stuart", bio: "Artist bio coming soon." },
    { name: "ahmed", bio: "Artist bio coming soon." },

    {
      name: "redafarhan",
      bio: "رضا فرحان فنان تشكيلي عراقي من مواليد 1955، حاصل على بكالوريوس من كلية الفنون الجميلة في بغداد. عضو في نقابة الفنانين العراقيين وجمعية التشكيليين العراقيين. شارك في العديد من المعارض المحلية والدولية منذ عام 1994، بما في ذلك معارض في فرنسا، لندن، دبي، واسطنبول، إضافة إلى مشاركاته في مهرجان بابل ومعارض اليونسكو. حصل على عدة جوائز، من أبرزها جائزة الواسطي وقلادة الوفاء من وزارة الثقافة."
    },
  ];

  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>الفنانون</h1>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {artists.map((artist) => (
          <div key={artist.name} style={{ width: "260px" }}>
            
            <div
              onClick={() =>
                setActiveArtist(
                  activeArtist === artist.name ? null : artist.name
                )
              }
              style={{
                width: "260px",
                height: "340px",
                backgroundColor: "#f2d23b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={`/images/${artist.name}.jpg`}
                alt={artist.name}
                style={{ width: "72%" }}
              />
            </div>

            {activeArtist === artist.name && (
              <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
                {artist.bio}
              </p>
            )}
          </div>
        ))}
      </section>

      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
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
        }}
      >
        📸 Instagram account
      </a>
    </main>
  );
}