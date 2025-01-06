/*created by Kangjinhuyk 🕵
contact dev1 242067274660♻️
contact dev2 242067274660 ♻️
© Copy coder alert ⚠
*/





const config = require('../config');
const { cmd, commands } = require('../command');

let stopKickall = false; // Variable to stop the execution of the kickall command

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cmd({
    pattern: "kickall",
    desc: "Expulse tous les membres non administrateurs du groupe.",
    react: "🧨",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, {
    from,
    quoted,
    isCmd,
    command,
    isGroup,
    sender,
    isAdmins,
    isOwner,
    groupMetadata,
    groupAdmins,
    isBotAdmins,
    reply
}) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply(`❌ Cette commande ne peut être utilisée qu'en groupe.`);

        // Check if the user is an admin
        if (!isAdmins) return reply(`❌ Seuls les administrateurs de groupe peuvent utiliser cette commande.`);

        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply(`❌ J'ai besoin de privilèges d'administrateur pour supprimer des membres du groupe.`);

        stopKickall = false; // Reset the stop flag

        // Send warning message before execution
        reply(`⚠️ *Attention !* Tous les membres non administrateurs seront supprimés dans *5 secondes*.\nPour annuler cette opération, tapez *restart*.`);
        
        // Countdown before execution with a chance to cancel
        for (let i = 5; i > 0; i--) {
            if (stopKickall) {
                return reply(`✅ *Opération annulée.* Aucun membre n'a été supprimé.`);
            }
            await delay(1000); // Wait for 1 second
        }

        // Filter out non-admin members
        const allParticipants = groupMetadata.participants;
        const nonAdminParticipants = allParticipants.filter(member => 
            !groupAdmins.includes(member.id) && member.id !== conn.user.jid
        );

        if (nonAdminParticipants.length === 0) {
            return reply(`✅ Il n'y a aucun membre non administrateur à supprimer.`);
        }

        // Remove non-admin members
        for (let participant of nonAdminParticipants) {
            if (stopKickall) {
                return reply(`✅ *Opération annulée.* Certains membres n'ont peut-être pas été supprimés.`);
            }
            await conn.groupParticipantsUpdate(from, [participant.id], "remove")
                .catch(err => console.error(`⚠️ Failed to remove ${participant.id}:`, err));
        }

        // Send success confirmation
        reply(`✅ *Succès !* Tous les membres non administrateurs ont été supprimés du groupe.`);
    } catch (e) {
        console.error('Erreur lors de lexécution de kickall:', e);
        reply('❌ Une erreur sest produite lors de lexécution de la commande.');
    }
});

// Command to stop kickall execution
cmd({
    pattern: "restart",
    desc: "Arrête la commande kickall.",
    react: "⏹️",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    stopKickall = true; // Set the stop flag to true
    reply(`✅ *L'opération Kickall a été annulée.*`);
});

// Variable to track if pdm notifications are enabled
let pdmStatus = false; 

// Command to promote/demote and toggle notifications on/off
cmd({
    pattern: "pdm",
    desc: "Promote or demote a user and toggle notifications for role changes.",
    react: "📢",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, {
    from,
    quoted,
    isCmd,
    command,
    isGroup,
    sender,
    isAdmins,
    groupMetadata,
    groupAdmins,
    reply
}) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply(`❌ This command can only be used in groups.`);

        // Ensure the user is an admin to use this command
        if (!isAdmins) return reply(`❌ Only group admins can use this command.`);

        // Split the command to check if it's enabling/disabling the notifications
        const args = m.text.trim().split(/ +/).slice(1); // Get the arguments after the command
        const status = args[0]?.toLowerCase(); // Either "on" or "off"

        // Handle enabling or disabling the pdm notifications
        if (status === "on") {
            pdmStatus = true;
            return reply("✅ The 'pdm' notifications are now enabled. The group will be notified about promotions and demotions.");
        } else if (status === "off") {
            pdmStatus = false;
            return reply("❌ The 'pdm' notifications are now disabled. The group will no longer be notified about promotions and demotions.");
        }

        // Ensure a user is mentioned for promotion/demotion
        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]; // Correct way to get mentioned JID
        if (!mentionedJid) return reply(`⚠️ Please mention a user to promote or demote.`);

        // Get the current list of group admins
        const groupAdmins = groupMetadata.participants
            .filter(member => member.admin)
            .map(admin => admin.id);

        // Find the creator of the group
        const groupOwner = groupMetadata.owner;

        // Check if the mentioned user is an admin
        const isUserAdmin = groupAdmins.includes(mentionedJid);

        // Promote or demote the user based on their current status
        if (isUserAdmin) {
            // Demote the user (remove admin role)
            await conn.groupParticipantsUpdate(from, [mentionedJid], "demote")
                .then(() => {
                    reply(`✅ @${mentionedJid.split('@')[0]} has been demoted from admin.`);
                    // Notify the group
                    conn.sendMessage(from, `❌ @${mentionedJid.split('@')[0]} has been demoted from admin.`, { mentions: [mentionedJid] });
                    // Notify the mentioned user in private
                    conn.sendMessage(mentionedJid, `❌ You have been demoted from admin in the group.`, { quoted: m });
                    // Notify the group creator in private
                    conn.sendMessage(groupOwner, `❌ @${mentionedJid.split('@')[0]} has been demoted from admin.`, { mentions: [mentionedJid] });
                })
                .catch(err => {
                    console.error(`Failed to demote user:`, err);
                    reply(`❌ Failed to demote @${mentionedJid.split('@')[0]}.`);
                });
        } else {
            // Promote the user (make admin)
            await conn.groupParticipantsUpdate(from, [mentionedJid], "promote")
                .then(() => {
                    reply(`✅ @${mentionedJid.split('@')[0]} has been promoted to admin.`);
                    // Notify the group
                    conn.sendMessage(from, `✅ @${mentionedJid.split('@')[0]} has been promoted to admin.`, { mentions: [mentionedJid] });
                    // Notify the mentioned user in private
                    conn.sendMessage(mentionedJid, `✅ You have been promoted to admin in the group.`, { quoted: m });
                    // Notify the group creator in private
                    conn.sendMessage(groupOwner, `✅ @${mentionedJid.split('@')[0]} has been promoted to admin.`, { mentions: [mentionedJid] });
                })
                .catch(err => {
                    console.error(`Failed to promote user:`, err);
                    reply(`❌ Failed to promote @${mentionedJid.split('@')[0]}.`);
                });
        }
    } catch (e) {
        console.error('Error in pdm command:', e);
        reply('❌ An error occurred while processing the command.');
    }
});