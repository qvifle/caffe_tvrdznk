const sendToTelegram = (message: string) => {
  //   const BOT_TOKEN = process.env.BOT_TOKEN;
  //   const CHAT_ID = process.env.CHAT_ID;
  const BOT_TOKEN = "6322581206:AAGn1ryBdhR1cW5jfYippNTs862BzVD-kdY";
  const CHAT_ID = "-809932416";

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `chat_id=${CHAT_ID}&text=${message}&parse_mode=html`,
  });
};

export default sendToTelegram;
