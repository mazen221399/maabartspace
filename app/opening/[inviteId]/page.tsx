import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jcajsxzpdwomjflumxsb.supabase.co",
  "sb_publishable_hVI5TUZ5hjZKN8dEhBaF9A_Pqr6t6vK"
);

type Props = {
  params: {
    inviteId: string;
  };
};

export default async function InvitationPage({ params }: Props) {

  const { data: invitation } = await supabase
    .from("invitations")
    .select("*")
    .eq("invite_id", params.inviteId)
    .single();

  if (!invitation) {
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
          maxWidth: "900px",
          background: "#050505",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "60px",
        }}
      >

        <p
          style={{
            color: "#F6D10D",
            letterSpacing: "4px",
            fontSize: "11px",
          }}
        >
          MAAB ART SPACE
        </p>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 300,
          }}
        >
          أهلاً {invitation.guest_name}
        </h1>

        <p
          style={{
            lineHeight: "2.2",
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
          }}
        >
          يسرّ مآب دعوتكم لحضور حفل الافتتاح والمعرض المصاحب
          <br />
          الأربعاء 10 يونيو 2026
          <br />
          الساعة 8:00 مساءً
        </p>

      </div>
    </main>
  );
}