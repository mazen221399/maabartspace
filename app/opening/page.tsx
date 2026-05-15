"use client";

import { supabase } from "../lib/supabase";

export default function OpeningPage() {

  const updateStatus = async (status: string) => {
    await supabase
      .from("invitations")
      .upsert({
        invite_id: "GENERAL",
        guest_name: "Guest",
        status,
      });

    alert(
      status === "confirmed"
        ? "Thank you for confirming your attendance."
        : "Your response has been recorded."
    );
  };

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#050505",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >

        <p
          style={{
            color: "#F6D10D",
            letterSpacing: "4px",
            fontSize: "11px",
            margin: 0,
          }}
        >
          MAAB ART SPACE
        </p>

        <h1
          style={{
            fontSize: "54px",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Opening Ceremony
        </h1>

        <p
          style={{
            lineHeight: "2.2",
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
            margin: 0,
          }}
        >
          يسرّ مآب دعوتكم لحضور حفل الافتتاح والمعرض المصاحب الذي يقدّم
          مجموعة مختارة من الأعمال الفنية لفنانين محليين وعالميين
          <br />
          <br />
          الأربعاء 10 يونيو 2026
          <br />
          الساعة 8:00 مساءً
          <br />
          الدعوة تشمل شخصًا واحدًا مع مرافق
        </p>

        <a
          href="https://maps.app.goo.gl/PXqMMCmCwdPDab497"
          target="_blank"
          style={{
            color: "#F6D10D",
            textDecoration: "none",
            fontSize: "14px",
            letterSpacing: "1px",
            width: "fit-content",
          }}
        >
          VIEW LOCATION
        </a>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >

          <button
            onClick={() => updateStatus("confirmed")}
            style={{
              padding: "14px 32px",
              border: "1px solid #F6D10D",
              background: "transparent",
              color: "#F6D10D",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Confirm RSVP
          </button>

          <button
            onClick={() => updateStatus("declined")}
            style={{
              padding: "14px 32px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Decline
          </button>

        </div>

      </div>
    </main>
  );
}