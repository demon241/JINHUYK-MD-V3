/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *KANG JINHYUK🍂*

> *JINHUYK-MD-V3 REPO:*
*|* *https://github.com/KangJinhuyk/JINHUYK-MD-V3*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41*
*╰──────────────●●►*

> *CREATED BY KANG JINHYUK*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "ᴊɪɴʜᴜʏᴋ ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ᴊɪɴʜᴜʏᴋ-ᴍᴅ-ᴠ3',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/KangJinhuyk/JINHUYK-MD-V3" ,
thumbnailUrl: "https://i.postimg.cc/jjbSFpsm/JINHUYK-MD-V3.jpg'" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
