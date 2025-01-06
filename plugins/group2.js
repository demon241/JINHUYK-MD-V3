/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/




const { cmd } = require('../command');
let antideleteStatus = {}; // Tracks the ON/OFF status for each chat


cmd({
    pattern: "channel",
    desc: "Obtenez le lien vers la chaîne WhatsApp officielle.",
    react: "📢",
    category: "utility",
    use: ".channel",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the channel link inside the command
        const channelLink = "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";

        // Send the channel link to the user
        reply(`Voici 💁🏽 le lien vers notre chaîne WhatsApp officielle SASAKI:\n\n${channelLink}\n\n> Rejoignez-nous pour rester informé des dernières nouvelles et annonces🍂.`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending channel link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the channel link.");
    }
});
// Command for sending the support group or page link
cmd({
    pattern: "support",
    desc: "Obtenez le lien vers le groupe ou la page de soutien.",
    react: "🛠️",
    category: "utility",
    use: ".support",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the support link inside the command
        const supportLink = "https://chat.whatsapp.com/IdB2EfQiNlKBekQrigN9m9";

        // Send the support link to the user
        reply(`Need help 💁🏽 or have questions ? Join Kerm support group:\n\n${supportLink}\n\n> Feel free to ask your questions or report issues🙇🏽.`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending support link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the support link.");
    }
});