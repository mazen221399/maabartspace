export default function Artworks() {
  return (
    <main style={{ padding: "40px" }}>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px"
      }}>

        {/* العمل */}
        <div style={{ textAlign: "center" }}>
          
          <img
            src="/images/artworks/hahaha.jpg"
            alt="Artwork"
            style={{
              width: "100%",
              borderRadius: "10px",
              cursor: "pointer"
            }}
            onClick={() => {

              const modal = document.createElement("div");
              modal.style.position = "fixed";
              modal.style.top = "0";
              modal.style.left = "0";
              modal.style.width = "100%";
              modal.style.height = "100%";
              modal.style.background = "rgba(0,0,0,0.9)";
              modal.style.display = "flex";
              modal.style.flexDirection = "column";
              modal.style.alignItems = "center";
              modal.style.justifyContent = "center";
              modal.style.padding = "20px";
              modal.style.zIndex = "9999";
              modal.style.overflowY = "auto";

              modal.onclick = () => modal.remove();

              const container = document.createElement("div");
              container.style.textAlign = "center";
              container.style.maxWidth = "800px";

              const bigImg = document.createElement("img");
              bigImg.src = "/images/artworks/hahaha.jpg";
              bigImg.style.maxWidth = "100%";
              bigImg.style.borderRadius = "10px";
              bigImg.style.marginBottom = "20px";

              const description = document.createElement("div");
              description.style.color = "white";
              description.style.lineHeight = "1.8";
              description.style.fontSize = "16px";

              description.innerHTML = `
                <p>
                  مازن أنديجاني <br/>
                  اتصالات حرف الهاء – خط الثلث
                </p>

                <p>
                  تجسيد بصري لحالة السعادة من خلال تنوع أشكال نطق حرف الهاء،
                  بمعالجة عفوية وتكوينات حرة ضمن قواعد خط الثلث.
                </p>

                <p>
                  حبر على ورق مقهر طبيعي (بوتان)<br/>
                  أحبار Schmincke وأحبار صينية طبيعية
                </p>

                <p>
                  56 × 81 سم <br/>
                  عمل أصلي (1/1)
                </p>
              `;

              container.appendChild(bigImg);
              container.appendChild(description);

              modal.appendChild(container);
              document.body.appendChild(modal);
            }}
          />

        </div>

      </div>

    </main>
  );
}