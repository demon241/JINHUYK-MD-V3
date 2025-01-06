/*created by Kangjinhuyk🕵
contact dev1 242069953931 ♻️
contact dev2 242067274660 ♻️
© Copy coder alert ⚠
*/




const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "delete",
    react: "🧹",
    alias: ["del"],
    desc: "Supprimer un message cité (fonctionne dans les groupes et les chats privés)).",
    category: "group",
    use: '.del',
    filename: __filename,
},
async (conn, mek, m, {
    from, quoted, reply, isOwner, isAdmins
}) => {
    try {
        // Ensure the command is used in response to a message
        if (!quoted) return reply(`❌ Veuillez répondre au message que vous souhaitez que je supprime.`);

        // Check if the user is the owner or admin in a group
        if (m.isGroup && !isOwner && !isAdmins) {
            return reply(`❌ Cette commande ne peut être utilisée que par les administrateurs de groupe ou le propriétaire du bot.`);
        }

        // Construct the key of the message to delete
        const key = {
            remoteJid: m.chat, // Chat (group or private) where the message is located
            fromMe: quoted.key.fromMe, // Check if the message was sent by the bot
            id: quoted.key.id, // ID of the quoted message
            participant: quoted.key.participant || m.chat // Sender of the message
        };

        // Send the delete request
        await conn.sendMessage(from, { delete: key });

    } catch (e) {
        console.error('Error in delete command:', e);
        reply(`❌ Unable to delete the message.`);
    }
});