/*
ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +242067274660
YT: SASAKICOMPAGNIE
Github: Kangjinhuyk
*/







const { cmd } = require("../command");
const os = require("os");
const moment = require("moment");

let botStartTime = Date.now(); // Enregistrement de l'heure de démarrage du bot

cmd({
    pattern: "alive",
    desc: "Vérifiez si le bot est actif.",
    category: "info",
    react: "💡",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // Heure actuelle
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        // Runtime
        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        // Message Alive
        const aliveMessage = `
🌟 *JINHUYK-MD-V3 STATUS* 🌟

🕒 *Time*: ${currentTime}
📅 *Date*: ${currentDate}
⏳ *Uptime*: ${runtimeHours} heures, ${runtimeMinutes} minutes, ${runtimeSeconds} seconde

🤖 *Statut*: *Jinhuykest vivant et prêt !*

🎉 *Profitez du service!*
        `;

        // Envoyer le message
        await reply(aliveMessage.trim());
    } catch (error) {
        console.error(error);
        reply("❌ Une erreur s'est produite lors du traitement de la commande alive.");
    }
});