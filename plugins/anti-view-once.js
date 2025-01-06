/*
ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +242067274660
YT: SASAKICOMPAGNIE
Github: Kangjinhuyk
*/













const { cmd, commands } = require("../command");

cmd({
  pattern: "vv",
  alias: ["vo", "viewonce"],
  react: "✨",
  desc: "Lire les messages ViewOnce",
  category: "download",
  filename: __filename,
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply,
}) => {
  try {
    // Check if the quoted message exists and is a ViewOnce message
    const viewOnceMessage = quoted?.msg?.contextInfo?.quotedMessage?.viewOnceMessageV2;
    if (!viewOnceMessage) {
      return reply("❌ Veuillez répondre à un message ViewOnce.");
    }

    // Handle ViewOnce image messages
    if (viewOnceMessage.message?.imageMessage) {
      console.log("Processing a ViewOnce image.");
      const caption = viewOnceMessage.message.imageMessage.caption || "No caption.";
      const mediaPath = await conn.downloadAndSaveMediaMessage(viewOnceMessage.message.imageMessage);
      return conn.sendMessage(from, {
        image: { url: mediaPath },
        caption: caption,
      });
    }

    // Handle ViewOnce video messages
    if (viewOnceMessage.message?.videoMessage) {
      console.log("Processing a ViewOnce video.");
      const caption = viewOnceMessage.message.videoMessage.caption || "No caption.";
      const mediaPath = await conn.downloadAndSaveMediaMessage(viewOnceMessage.message.videoMessage);
      return conn.sendMessage(from, {
        video: { url: mediaPath },
        caption: caption,
      });
    }

    // If it's not an image or video, return an error
    return reply("❌ Type de message ViewOnce non pris en charge.");
  } catch (error) {
    console.error("Erreur lors du traitement du message ViewOnce:", error);
    return reply("❌ Une erreur s'est produite lors du traitement du message ViewOnce.");
  }
});