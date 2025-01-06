/*
ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +242067274660
YT: SASAKICOMPAGNIE
Github: Kangjinhuyk
*/








const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 BONJOURS ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴊɪɴʜᴜʏᴋ-ᴍᴅ-ᴠ3*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ: ᴋᴀɴɢ ᴊɪɴʜʏᴜᴋ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ᴊɪɴʜᴜʏᴋ-ᴍᴅ-ᴠ3.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴊɪɴʜᴜʏᴋ-ᴍᴅ*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴄᴏɴɢᴏ-ʙʀᴀᴢᴀᴠɪʟʟᴇ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • JINHUYK-MD-V3- TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᴋᴀɴɢ ᴊɪɴʜʏᴜᴋ*
*│  ◦* *▢➠sᴀsᴀᴋɪ-ᴄᴏᴍᴘᴀɢɴɪᴇ
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀɴɢ ᴊɪɴʜʏᴜᴋ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
