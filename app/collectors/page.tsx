"use client";

import { useState } from "react";

export default function CollectorsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const interests = [
    "الخط العربي",
    "الأعمال التشكيلية",
    "التصوير الفوتوغرافي",
    "المنحوتات",
    "الأعمال المعاصرة",
    "الفن السعودي",
    "الأعمال محدودة النسخ",
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("interests", selectedInterests.join(", "));

    const response = await fetch(
      "https://formspree.io/f/mwvzqepe",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
      setSelectedInterests([]);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "120px 20px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        {!submitted ? (
          <>
            <h1
              style={{
                fontSize: "48px",
                marginBottom: "25px",
                textAlign: "center",
              }}
            >
              مجتمع المقتنين
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#ccc",
                lineHeight: "2",
                marginBottom: "60px",
                fontSize: "18px",
              }}
            >
              يرحب مآب بالتواصل مع المهتمين باقتناء الأعمال الفنية والانضمام
              إلى مجتمع المقتنين للاطلاع على الأعمال والمعارض والفرص القادمة.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                style={inputStyle}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                style={inputStyle}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="رقم الجوال"
                style={inputStyle}
              />

              <div>
                <h3
                  style={{
                    marginBottom: "20px",
                    fontSize: "22px",
                  }}
                >
                  الاهتمامات
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                  }}
                >
                  {interests.map((interest) => (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      style={{
                        padding: "12px 18px",
                        borderRadius: "999px",
                        border: selectedInterests.includes(interest)
                          ? "1px solid #F6D300"
                          : "1px solid rgba(255,255,255,0.15)",
                        background: selectedInterests.includes(interest)
                          ? "#F6D300"
                          : "transparent",
                        color: selectedInterests.includes(interest)
                          ? "black"
                          : "white",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <select
                name="budget"
                style={inputStyle}
              >
                <option>الميزانية التقريبية للاقتناء</option>
                <option>أقل من 5,000 ريال</option>
                <option>5,000 – 15,000 ريال</option>
                <option>15,000 – 50,000 ريال</option>
                <option>أكثر من 50,000 ريال</option>
              </select>

              <textarea
                name="notes"
                placeholder="ملاحظات"
                rows={6}
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#F6D300",
                  color: "black",
                  border: "none",
                  padding: "18px",
                  borderRadius: "999px",
                  fontSize: "18px",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                الانضمام إلى مجتمع المقتنين
              </button>
            </form>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              paddingTop: "120px",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                marginBottom: "25px",
              }}
            >
              شكراً لكم
            </h1>

            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                lineHeight: "2",
                marginBottom: "40px",
              }}
            >
              تم استلام اهتمامكم بنجاح،
              <br />
              ويسعدنا انضمامكم إلى مجتمع المقتنين في مآب.
            </p>

            <a
              href="/"
              style={{
                display: "inline-block",
                background: "#F6D300",
                color: "black",
                padding: "16px 30px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              العودة للرئيسية
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "18px",
  padding: "18px",
  color: "white",
  fontSize: "16px",
  outline: "none",
};