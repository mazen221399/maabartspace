type Props = {
  params: Promise<{
    inviteId: string;
  }>;
};

const guests: Record<
  string,
  {
    name: string;
  }
> = {
  "MAAB-014": {
    name: "الدكتورة بسمة مختار",
  },

  "MAAB-015": {
    name: "أ. خالد السيف",
  },

  "MAAB-016": {
    name: "أ. سارة العمري",
  },

  TEST: {
    name: "TEST USER",
  },
};

export default async function InvitationPage({ params }: Props) {
  const { inviteId } = await params;

  const guest = guests[inviteId];

  if (!guest) {
    return (
      <main
        style={{
          background: "#000",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        Invitation Not Found
      </main>
    );
  }

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
          maxWidth: "920px",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "70px 80px",
          background: "rgba(255,255,255,0.01)",
          backdropFilter: "blur(2px)",
          position: "relative",
        }}
      >
        <p
          style={{
            color: "#F6D10D",
            marginBottom: "22px",
            letterSpacing: "4px",
            fontSize: "11px",
            textTransform: "uppercase",
          }}
        >
          Private Invitation
        </p>

        <p
          style={{
            marginBottom: "50px",
            fontSize: "20px",
            opacity: 0.92,
          }}
        >
          {guest.name}
        </p>

        <h1
          style={{
            fontSize: "52px",
            marginBottom: "35px",
            fontWeight: "300",
            lineHeight: "1.1",
          }}
        >
          Opening Ceremony
        </h1>

        <div
          style={{
            lineHeight: "2.1",
            color: "rgba(255,255,255,0.78)",
            marginBottom: "45px",
            fontSize: "19px",
            maxWidth: "700px",
          }}
        >
          <p>
            يسرّ مآب دعوتكم لحضور حفل الافتتاح والمعرض المصاحب، والذي يقدّم
            مجموعة مختارة من الأعمال الفنية لفنانين محليين وعالميين.
          </p>

          <p style={{ marginTop: "28px" }}>
            الأربعاء 10 يونيو 2026
            <br />
            الساعة 8:00 مساءً
          </p>
        </div>

        <p
          style={{
            marginBottom: "12px",
            color: "#F6D10D",
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Invitation ID: {inviteId}
        </p>

        <p
          style={{
            marginBottom: "40px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          Valid for the invitee and one guest.
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://maabartspace.com"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              border: "1px solid #F6D10D",
              color: "#F6D10D",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Confirm RSVP
          </a>

          <a
            href="https://maps.app.goo.gl/PXqMMCmCwdPDab497"
            target="_blank"
            style={{
              color: "#F6D10D",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            View Location →
          </a>
        </div>
      </div>
    </main>
  );
}