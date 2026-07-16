"use client";

import { useState, useEffect } from "react";

export default function ArtworksPage() {

  const artworksData = [
    { image: "/images/artworks/fahad1.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/fahad2.jpg", title: "بدون عنوان" },
    { image: "/images/artworks/hadeethalbab.jpg", title: "حديث الباب" },

    {
      image: "/images/artworks/hahaha.jpg",
      title: "هههه",
      details:
        "كتابة يدوية بخط الثلث باستخدام احبار طبيعية و صناعية، على ورق توت طبيعي مصنوع في بوتان و معالج في تركيا بمقاس 80 × 60 سم"
    },
    {
     image: "/images/artworks/shalky.jpg",
     title: "شالكي / Shalky",
    },
{
    image: "/images/artworks/farghab.jpg",
  title: "وإلى ربك فارغب",
  details: "بالخط المغربي المبسوط والتذهيب اليدوي على ورق طبيعي معالج يدوياً",
},

{
  image: "/images/artworks/menni.jpg",
  title: "وألقيت عليك محبة مني",
  details: "بالخط المغربي المبسوط والتذهيب اليدوي على ورق طبيعي معالج يدوياً",
},

{
  image: "/images/artworks/torab.jpg",
  title: "إذا صح منك الود",
  details: "بيت شعر منحوت بخط عربي على جرة فخارية",
},

{
  image: "/images/artworks/circle.jpg",
  title: "الدائرة",
  details: "ألوان أكريليك على كانفس",
},

{
  image: "/images/artworks/la.jpg",
  title: "لا أبرح حتى أبلغ",
  details:
    "كتابة يدوية بخط الديواني الجلي باستخدام الأحبار على ورق مقهر."
},

{
  image: "/images/artworks/moh.jpg",
  title: "محمد كالزهر في ترفٍ، والبدر في شرفٍ، والبحر في كرمٍ، والدهر في هممٍ",
  details:
    "كتابة يدوية بخطي الثلث والنسخ باستخدام الأحبار على ورق مقهر."
},

{
  image: "/images/artworks/ksp1.jpg",
  title: "حديقة الملك سلمان",
  details: "أكريليك على كانفس، 200 × 100 سم."
},

{
  image: "/images/artworks/bait.jpg",
  title: "اللهم احفظ هذا البيت وأهله",
  details: "بالخط المغربي المبسوط والتذهيب اليدوي على ورق طبيعي معالج يدوياً",
},
    {
      image: "/images/artworks/hoa1.jpg",
      title: "هو علي هين",
      details:
        "كتابة يدوية بخط الثلث باستخدام احبار طبيعية و صناعية، على ورق توت طبيعي مصنوع في بوتان و معالج في تركيا بمقاس 80 × 60 سم"
    },

    { image: "/images/artworks/joy.jpg", title: "Joy" },

    {
      image: "/images/artworks/tarot11.jpg",
      title: "The Ark of Tarot 1",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام جيلاتين فضة ماركة فورما العريقة 1921م بمقاس 50×50 سم"
    },

    {
      image: "/images/artworks/moo.jpg",
      title: "Moored",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام جيلاتين فضة ماركة فورما العريقة 1921م بمقاس 50×50 سم"
    },

    {
      image: "/images/artworks/stedf.jpg",
      title: "Steadfastness",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام جيلاتين فضة ماركة فورما العريقة 1921م بمقاس 50×50 سم"
    },

    {
      image: "/images/artworks/manis.jpg",
      title: "Manifestation",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام جيلاتين فضة ماركة فورما العريقة 1921م بمقاس 50×50 سم"
    },

    {
      image: "/images/artworks/whis.jpg",
      title: "Whisper",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام جيلاتين فضة ماركة فورما العريقة 1921م بمقاس 50×50 سم"
    },

    {
      image: "/images/artworks/tarot22.jpg",
      title: "The Ark of Tarot 2",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام جيلاتين فضة ماركة فورما العريقة 1921م بمقاس 50×50 سم"
    },

    { image: "/images/artworks/mknonat.jpg", title: "مكنونات" },
    { image: "/images/artworks/najdiat.jpg", title: "نجديات" },
    { image: "/images/artworks/onfowan.jpg", title: "عنفوان امرأة" },

    {
      image: "/images/artworks/rbbi.jpg",
      title: "رب اجعل لي آية",
      details:
        "كتابة يدوية بخط الثلث باستخدام احبار طبيعية و صناعية، على ورق توت طبيعي مصنوع في بوتان و معالج في تركيا بمقاس 80 × 60 سم"
    },

    {
      image: "/images/artworks/rohi.jpg",
      title: "روحه روحي",
      details:
        "كتابة يدوية بخط الثلث باستخدام احبار طبيعية و صناعية، على ورق توت طبيعي مصنوع في بوتان و معالج في تركيا بمقاس 80 × 60 سم"
    },

    {
      image: "/images/artworks/toq.jpg",
      title: "توق",
      description: "أحبار على ورق موز مُقهّر يدوياً",
    },

    { image: "/images/artworks/s1.jpg", title: "Diriyah" },
    { image: "/images/artworks/s2.jpg", title: "Alula" },
    { image: "/images/artworks/s3.jpg", title: "Story Night at Ouja" },
    { image: "/images/artworks/s4.jpg", title: "Riyadh the Dancing City" },

    {
      image: "/images/artworks/s5.jpg",
      title: "Camels in Deriyah - Acrylic on Canvas",
    },

    {
      image: "/images/artworks/s6.jpg",
      title: "Sunset on Diriyah - Acrylic on Canvas",
    },

    { image: "/images/artworks/sisters.jpg", title: "Sisters" },
    { image: "/images/artworks/womenstrength.jpg", title: "جبروت امرأة" },
    { image: "/images/artworks/ziyarah.jpg", title: "زيارة" },
    { image: "/images/artworks/confusion.jpg", title: "Confusion" },

    { image: "/images/artworks/taa.jpg", title: "تاء مربوطة" },
    { image: "/images/artworks/tajalle.jpg", title: "تجلِّ" },
    { image: "/images/artworks/alula.jpg", title: "العلا" },

    {
      image: "/images/artworks/silent.jpg",
      title: "Silent Ascendance",
      medium: "Oil on Canvas",
      size: "50 × 70 cm"
    },

    {
      image: "/images/artworks/noon1.jpg",
      title: "نون 1",
      description: "نسخة رقمية بعدد محدود",
    },

    {
      image: "/images/artworks/noon2.jpg",
      title: "نون 2",
      description: "نسخة رقمية بعدد محدود",
    },

    {
      image: "/images/artworks/girlandcat.JPG",
      title: "Night's Story",
      medium: "Oil on Canvas"
    },

    {
      image: "/images/artworks/bigwheel.jpg",
      title: "Abandoned Big Wheel ثلاثية",
      full: true
    },

    { image: "/images/artworks/botsnam.jpg", title: "Botsnam" },
    { image: "/images/artworks/farasan.jpg", title: "Farasan" },
    { image: "/images/artworks/moonersrock.jpg", title: "Mooners Rock" },
    { image: "/images/artworks/rallyjameel.jpg", title: "Rally Jameel" },
    { image: "/images/artworks/reddune.jpg", title: "Red Dune" },
    { image: "/images/artworks/ubm.jpg", title: "عروق بني معارض" },
    { image: "/images/artworks/wildlife.jpg", title: "Wild Life" },

    { image: "/images/artworks/redfish.jpg", title: "Res Fish" },
    { image: "/images/artworks/violetroom.jpg", title: "Violet Room" }
  ];

  const [artworks, setArtworks] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const shuffled = [...artworksData].sort(() => Math.random() - 0.5);
    setArtworks(shuffled);
  }, []);

  return (
    <main className="page">

      <h1 className="title">الأعمال الفنية</h1>

      <div className="grid">
        {artworks.map((art, i) => (
          <div key={i} className="card" onClick={() => setSelected(art)}>
            <img
              src={art.image}
              alt={art.title}
              className={art.full ? "full-img" : ""}
            />
            <p>{art.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%"
              }}
            >

             <img
  src={selected.image}
  draggable={false}
  style={{
    userSelect: "none",
    position: "relative",
    zIndex: 1
  }}
/>

             <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-25deg)",
    fontSize: "50px",
    fontWeight: "bold",
    color: "rgba(255,255,255,0.10)",
    pointerEvents: "none",
    userSelect: "none",
    whiteSpace: "nowrap",
    letterSpacing: "8px",
    zIndex: 5,
    width: "100%",
    textAlign: "center"
  }}
>
                MAAB ART SPACE
              </div>

            </div>

            <p className="title-modal">
              {selected.title}
            </p>

            {selected.details && (
              <p className="details-modal">
                {selected.details}
              </p>
            )}

            <p className="copyright">
              © MAAB Art Space — جميع حقوق الصورة محفوظة
            </p>

            <p className="acquire-title">طلب اقتناء</p>

            <div className="actions">

              <a
                href={`https://wa.me/966554520495?text=أرغب في اقتناء العمل: ${selected.title}`}
                target="_blank"
                className="btn gold"
              >
                واتساب
              </a>

              <a
                href={`mailto:info@maabartspace.com?subject=طلب اقتناء&body=أرغب في اقتناء العمل: ${selected.title}`}
                className="btn outline"
              >
                إيميل
              </a>

            </div>

          </div>

        </div>
      )}

      <style jsx>{`
        .page {
          padding: 120px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .title {
          margin-bottom: 30px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .card {
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow:
            0 0 0 2px #f2d23b,
            0 10px 30px rgba(242, 210, 59, 0.2);
        }

        .card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .full-img {
          object-fit: contain !important;
          background: black;
        }

        .card p {
          margin-top: 8px;
          color: white;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          padding: 20px;
        }

        .modal-content {
          text-align: center;
          max-width: 700px;
        }

        .modal img {
          max-width: 90vw;
          max-height: 65vh;
          border-radius: 6px;
        }

        .title-modal {
          color: white;
          margin-top: 15px;
          font-size: 20px;
        }

        .details-modal {
          margin: 12px auto 0;
          font-size: 13px;
          line-height: 1.9;
          color: #ccc;
          max-width: 500px;
        }

        .copyright {
          color: #777;
          font-size: 11px;
          margin-top: 10px;
        }

        .acquire-title {
          margin-top: 18px;
          font-size: 14px;
          color: #f2d23b;
        }

        .actions {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 18px;
          border-radius: 6px;
          font-size: 13px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: 0.3s;
        }

        .gold {
          background: #f2d23b;
          color: black;
        }

        .gold::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.6),
            transparent
          );
          transition: 0.6s;
        }

        .gold:hover::after {
          left: 100%;
        }

        .gold:hover {
          transform: scale(1.05);
        }

        .outline {
          border: 1px solid #f2d23b;
          color: #f2d23b;
        }

        .outline:hover {
          background: #f2d23b;
          color: black;
        }
      `}</style>

    </main>
  );
}