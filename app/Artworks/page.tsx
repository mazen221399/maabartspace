"use client";

import { useEffect, useState } from "react";

type Category = "painting" | "calligraphy" | "sculpture" | "photography";

type Artwork = {
  image: string;
  title: string;
  category: Category;
  details?: string;
  description?: string;
  medium?: string;
  size?: string;
  full?: boolean;
};

const categories: { value: "all" | Category; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "painting", label: "الرسم" },
  { value: "calligraphy", label: "الخط العربي" },
  { value: "sculpture", label: "المنحوتات" },
  { value: "photography", label: "التصوير" },
];

export default function ArtworksPage() {
  const artworksData: Artwork[] = [
    {
      image: "/images/artworks/fahad1.jpg",
      title: "بدون عنوان",
      category: "painting",
    },
    {
      image: "/images/artworks/fahad2.jpg",
      title: "بدون عنوان",
      category: "painting",
    },
    {
      image: "/images/artworks/hadeethalbab.jpg",
      title: "حديث الباب",
      category: "painting",
    },

    {
      image: "/images/artworks/hahaha.jpg",
      title: "هههه",
      category: "calligraphy",
      details:
        "كتابة يدوية بخط الثلث باستخدام أحبار طبيعية وصناعية، على ورق توت طبيعي مصنوع في بوتان ومعالج في تركيا، بمقاس 80 × 60 سم.",
    },

    {
      image: "/images/artworks/shalky.jpg",
      title: "شالكي / Shalky",
      category: "painting",
    },

    {
      image: "/images/artworks/farghab.jpg",
      title: "وإلى ربك فارغب",
      category: "calligraphy",
      details:
        "بالخط المغربي المبسوط والتذهيب اليدوي على ورق طبيعي معالج يدوياً.",
    },

    {
      image: "/images/artworks/menni.jpg",
      title: "وألقيت عليك محبة مني",
      category: "calligraphy",
      details:
        "بالخط المغربي المبسوط والتذهيب اليدوي على ورق طبيعي معالج يدوياً.",
    },

    {
      image: "/images/artworks/torab.jpg",
      title: "إذا صح منك الود",
      category: "sculpture",
      details: "بيت شعر منحوت بخط عربي على جرة فخارية.",
    },

    {
      image: "/images/artworks/circle.jpg",
      title: "الدائرة",
      category: "calligraphy",
      details: "ألوان أكريليك على كانفس.",
    },

    {
      image: "/images/artworks/la.jpg",
      title: "لا أبرح حتى أبلغ",
      category: "calligraphy",
      details:
        "كتابة يدوية بخط الديواني الجلي باستخدام الأحبار على ورق مقهّر.",
    },

    {
      image: "/images/artworks/moh.jpg",
      title:
        "محمد كالزهر في ترفٍ، والبدر في شرفٍ، والبحر في كرمٍ، والدهر في هممٍ",
      category: "calligraphy",
      details:
        "كتابة يدوية بخطي الثلث والنسخ باستخدام الأحبار على ورق مقهّر.",
    },

    {
      image: "/images/artworks/ksp1.jpg",
      title: "حديقة الملك سلمان",
      category: "painting",
      details: "أكريليك على كانفس، 200 × 100 سم.",
    },

    {
      image: "/images/artworks/enlight.jpg",
      title: "Enlightened",
      category: "painting",
      details: "Oil on Canvas, 150 × 95 cm.",
    },

    {
      image: "/images/artworks/horse.jpg",
      title: "Unnamed",
      category: "painting",
      details: "2023 • قطر العمل 60 سم.",
    },

    {
      image: "/images/artworks/bait.jpg",
      title: "اللهم احفظ هذا البيت وأهله",
      category: "calligraphy",
      details:
        "بالخط المغربي المبسوط والتذهيب اليدوي على ورق طبيعي معالج يدوياً.",
    },

    {
      image: "/images/artworks/hoa1.jpg",
      title: "هو علي هين",
      category: "calligraphy",
      details:
        "كتابة يدوية بخط الثلث باستخدام أحبار طبيعية وصناعية، على ورق توت طبيعي مصنوع في بوتان ومعالج في تركيا، بمقاس 80 × 60 سم.",
    },

    {
      image: "/images/artworks/joy.jpg",
      title: "Joy",
      category: "painting",
    },

    /* ===== أعمال التصوير الفوتوغرافي ===== */

    {
      image: "/images/artworks/tarot11.jpg",
      title: "The Ark of Tarot 1",
      category: "photography",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام، جيلاتين فضة ماركة فورما العريقة 1921م، بمقاس 50 × 50 سم.",
    },

    {
      image: "/images/artworks/moo.jpg",
      title: "Moored",
      category: "photography",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام، جيلاتين فضة ماركة فورما العريقة 1921م، بمقاس 50 × 50 سم.",
    },

    {
      image: "/images/artworks/stedf.jpg",
      title: "Steadfastness",
      category: "photography",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام، جيلاتين فضة ماركة فورما العريقة 1921م، بمقاس 50 × 50 سم.",
    },

    {
      image: "/images/artworks/manis.jpg",
      title: "Manifestation",
      category: "photography",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام، جيلاتين فضة ماركة فورما العريقة 1921م، بمقاس 50 × 50 سم.",
    },

    {
      image: "/images/artworks/whis.jpg",
      title: "Whisper",
      category: "photography",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام، جيلاتين فضة ماركة فورما العريقة 1921م، بمقاس 50 × 50 سم.",
    },

    {
      image: "/images/artworks/tarot22.jpg",
      title: "The Ark of Tarot 2",
      category: "photography",
      details:
        "طباعة Dark Room يدوية على ورق قطن 250 جرام، جيلاتين فضة ماركة فورما العريقة 1921م، بمقاس 50 × 50 سم.",
    },

    {
      image: "/images/artworks/mknonat.jpg",
      title: "مكنونات",
      category: "painting",
    },
    {
      image: "/images/artworks/najdiat.jpg",
      title: "نجديات",
      category: "painting",
    },
    {
      image: "/images/artworks/onfowan.jpg",
      title: "عنفوان امرأة",
      category: "painting",
    },

    {
      image: "/images/artworks/rbbi.jpg",
      title: "رب اجعل لي آية",
      category: "calligraphy",
      details:
        "كتابة يدوية بخط الثلث باستخدام أحبار طبيعية وصناعية، على ورق توت طبيعي مصنوع في بوتان ومعالج في تركيا، بمقاس 80 × 60 سم.",
    },

    {
      image: "/images/artworks/rohi.jpg",
      title: "روحه روحي",
      category: "calligraphy",
      details:
        "كتابة يدوية بخط الثلث باستخدام أحبار طبيعية وصناعية، على ورق توت طبيعي مصنوع في بوتان ومعالج في تركيا، بمقاس 80 × 60 سم.",
    },

    {
      image: "/images/artworks/toq.jpg",
      title: "توق",
      category: "calligraphy",
      description: "أحبار على ورق موز مقهّر يدوياً.",
    },

    {
      image: "/images/artworks/s1.jpg",
      title: "Diriyah",
      category: "painting",
    },
    {
      image: "/images/artworks/s2.jpg",
      title: "Alula",
      category: "painting",
    },
    {
      image: "/images/artworks/s3.jpg",
      title: "Story Night at Ouja",
      category: "painting",
    },
    {
      image: "/images/artworks/s4.jpg",
      title: "Riyadh the Dancing City",
      category: "painting",
    },

    {
      image: "/images/artworks/s5.jpg",
      title: "Camels in Deriyah - Acrylic on Canvas",
      category: "painting",
    },

    {
      image: "/images/artworks/s6.jpg",
      title: "Sunset on Diriyah - Acrylic on Canvas",
      category: "painting",
    },

    {
      image: "/images/artworks/sisters.jpg",
      title: "Sisters",
      category: "painting",
    },
    {
      image: "/images/artworks/womenstrength.jpg",
      title: "جبروت امرأة",
      category: "painting",
    },
    {
      image: "/images/artworks/ziyarah.jpg",
      title: "زيارة",
      category: "painting",
    },
    {
      image: "/images/artworks/confusion.jpg",
      title: "Confusion",
      category: "painting",
    },

    {
      image: "/images/artworks/taa.jpg",
      title: "تاء مربوطة",
      category: "calligraphy",
    },
    {
      image: "/images/artworks/tajalle.jpg",
      title: "تجلِّ",
      category: "calligraphy",
    },
    {
      image: "/images/artworks/alula.jpg",
      title: "العلا",
      category: "painting",
    },

    {
      image: "/images/artworks/silent.jpg",
      title: "Silent Ascendance",
      category: "painting",
      medium: "Oil on Canvas",
      size: "50 × 70 cm",
    },

    {
      image: "/images/artworks/noon1.jpg",
      title: "نون 1",
      category: "calligraphy",
      description: "نسخة رقمية بعدد محدود.",
    },

    {
      image: "/images/artworks/noon2.jpg",
      title: "نون 2",
      category: "calligraphy",
      description: "نسخة رقمية بعدد محدود.",
    },

    {
      image: "/images/artworks/girlandcat.JPG",
      title: "Night's Story",
      category: "painting",
      medium: "Oil on Canvas",
    },

    {
      image: "/images/artworks/bigwheel.jpg",
      title: "Abandoned Big Wheel ثلاثية",
      category: "photography",
      full: true,
    },

    {
      image: "/images/artworks/botsnam.jpg",
      title: "unnamed",
      category: "photography",
    },
    {
      image: "/images/artworks/farasan.jpg",
      title: "unnamed",
      category: "photography",
    },
    {
      image: "/images/artworks/moonersrock.jpg",
      title: "Mooners Rock",
      category: "photography",
    },
    {
      image: "/images/artworks/rallyjameel.jpg",
      title: "unnamed",
      category: "photography",
    },
    {
      image: "/images/artworks/reddune.jpg",
      title: "Red Dune",
      category: "photography",
    },
    {
      image: "/images/artworks/ubm.jpg",
      title: "عروق بني معارض",
      category: "photography",
    },
    {
      image: "/images/artworks/wildlife.jpg",
      title: "Wild Life",
      category: "photography",
    },

    {
      image: "/images/artworks/redfish.jpg",
      title: "Res Fish",
      category: "painting",
    },
    {
      image: "/images/artworks/violetroom.jpg",
      title: "Violet Room",
      category: "painting",
    },
  ];

  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selected, setSelected] = useState<Artwork | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<"all" | Category>("all");

  useEffect(() => {
    const shuffled = [...artworksData].sort(() => Math.random() - 0.5);
    setArtworks(shuffled);
  }, []);

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  const selectedDetails = selected
    ? selected.details ||
      selected.description ||
      [selected.medium, selected.size].filter(Boolean).join("، ")
    : "";

  return (
    <main className="page">
      <h1 className="title">الأعمال الفنية</h1>

      {/* ===== التصنيفات ===== */}
      <div className="filters">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            className={
              activeCategory === category.value ? "filter active" : "filter"
            }
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* ===== الأعمال ===== */}
      <div className="grid">
        {filteredArtworks.map((art) => (
          <div
            key={`${art.image}-${art.title}`}
            className="card"
            onClick={() => setSelected(art)}
          >
            <img
              src={art.image}
              alt={art.title}
              className={art.full ? "full-img" : ""}
              draggable={false}
            />

            <p>{art.title}</p>
          </div>
        ))}
      </div>

      {/* ===== نافذة تكبير العمل ===== */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-button"
              aria-label="إغلاق"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="modal-image-wrapper">
              <img
                src={selected.image}
                alt={selected.title}
                draggable={false}
              />

              <div className="watermark">MAAB ART SPACE</div>
            </div>

            <p className="title-modal">{selected.title}</p>

            {selectedDetails && (
              <p className="details-modal">{selectedDetails}</p>
            )}

            <p className="copyright">
              © MAAB Art Space — جميع حقوق الصورة محفوظة
            </p>

            <p className="acquire-title">طلب اقتناء</p>

            <div className="actions">
              <a
                href={`https://wa.me/966554520495?text=${encodeURIComponent(
                  `أرغب في اقتناء العمل: ${selected.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn gold"
              >
                واتساب
              </a>

              <a
                href={`mailto:info@maabartspace.com?subject=${encodeURIComponent(
                  "طلب اقتناء"
                )}&body=${encodeURIComponent(
                  `أرغب في اقتناء العمل: ${selected.title}`
                )}`}
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
          padding: 90px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .title {
          margin: 0 0 24px;
        }

        /* ===== FILTERS ===== */

        .filters {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }

        .filter {
          padding: 9px 18px;
          border: 1px solid rgba(242, 210, 59, 0.65);
          border-radius: 999px;

          background: rgba(0, 0, 0, 0.35);
          color: #f2d23b;

          font-family: inherit;
          font-size: 13px;
          cursor: pointer;

          transition:
            color 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .filter:hover,
        .filter.active {
          color: black;
          background: #f2d23b;
          border-color: #f2d23b;

          transform: translateY(-2px);

          box-shadow:
            0 0 0 1px rgba(242, 210, 59, 0.25),
            0 8px 24px rgba(242, 210, 59, 0.16);
        }

        /* ===== GRID ===== */

        .grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
        }

        .card {
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;

          background: rgba(0, 0, 0, 0.16);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
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

          user-select: none;
          -webkit-user-drag: none;
        }

        .full-img {
          object-fit: contain !important;
          background: black;
        }

        .card p {
          margin: 0;
          padding: 10px 8px 12px;
          color: white;
        }

        /* ===== MODAL ===== */

        .modal {
          position: fixed;
          inset: 0;
          z-index: 9999;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 20px;

          background: rgba(0, 0, 0, 0.94);
          overflow-y: auto;
        }

        .modal-content {
          position: relative;

          width: min(700px, 100%);
          margin: auto;

          text-align: center;
        }

        .close-button {
          position: absolute;
          top: -15px;
          left: -4px;
          z-index: 20;

          width: 38px;
          height: 38px;

          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;

          background: rgba(0, 0, 0, 0.72);
          color: white;

          font-size: 24px;
          line-height: 1;
          cursor: pointer;

          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .close-button:hover {
          color: #f2d23b;
          border-color: #f2d23b;
          background: black;
        }

        .modal-image-wrapper {
          position: relative;
          display: inline-block;
          max-width: 100%;
        }

        .modal-image-wrapper img {
          display: block;

          max-width: 90vw;
          max-height: 65vh;

          border-radius: 6px;

          user-select: none;
          -webkit-user-drag: none;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 5;

          width: 100%;

          transform: translate(-50%, -50%) rotate(-25deg);

          color: rgba(255, 255, 255, 0.1);
          font-size: 50px;
          font-weight: bold;
          letter-spacing: 8px;
          text-align: center;
          white-space: nowrap;

          pointer-events: none;
          user-select: none;
        }

        .title-modal {
          margin: 15px 0 0;

          color: white;
          font-size: 20px;
        }

        .details-modal {
          max-width: 520px;
          margin: 12px auto 0;

          color: #ccc;
          font-size: 13px;
          line-height: 1.9;
        }

        .copyright {
          margin: 10px 0 0;

          color: #777;
          font-size: 11px;
        }

        .acquire-title {
          margin: 18px 0 0;

          color: #f2d23b;
          font-size: 14px;
        }

        .actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 15px;
        }

        .btn {
          position: relative;
          overflow: hidden;

          padding: 10px 18px;
          border-radius: 6px;

          font-size: 13px;
          text-decoration: none;

          transition:
            color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
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
            rgba(255, 255, 255, 0.6),
            transparent
          );

          transition: left 0.6s ease;
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

        /* ===== RESPONSIVE ===== */

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .page {
            padding: 55px 14px;
          }

          .filters {
            gap: 8px;
            margin-bottom: 26px;
          }

          .filter {
            padding: 8px 13px;
            font-size: 12px;
          }

          .grid {
            gap: 12px;
          }

          .card img {
            height: 220px;
          }

          .watermark {
            font-size: 25px;
            letter-spacing: 4px;
          }

          .modal {
            align-items: flex-start;
            padding: 50px 14px 24px;
          }

          .close-button {
            top: -40px;
            left: 0;
          }

          .modal-image-wrapper img {
            max-width: 100%;
            max-height: 58vh;
          }
        }
      `}</style>
    </main>
  );
}