"use client";

export default function Home() {
  return (
    <main className="home">

      <div className="bg"></div>
      <div className="overlay"></div>

      <h1>MAAB</h1>

      <style jsx>{`
        .home {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .bg {
          position: fixed;
          inset: 0;
          background-image: url("/images/bg.jpg");
          background-size: cover;
          background-position: center;

          filter: blur(6px) brightness(0.85);
          transform: scale(1.05);

          z-index: -2;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%),
            linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: -1;
        }

        h1 {
          color: white;
          font-size: 56px;
          letter-spacing: 6px;
        }
      `}</style>

    </main>
  );
}