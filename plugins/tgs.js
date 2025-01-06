























const { cmd } = require('../command');
const axios = require('axios');



cmd({
  pattern: "tgs",
  alias: ["animatedsticker"],
  desc: "Search and fetch animated stickers (TGS) from Telegram",
  category: "downloader",
  react: "🎨",
  filename: __filename
}, async (_0x19564c, _0x1d2bb7) => {
  try {
    // Check if a search query is provided
    if (!_0x1d2bb7) {
      return await _0x19564c.reply("*_Please provide a name or keyword to search for stickers. Example: .tgs cats_*");
    }

    // Use Telegram API to search for stickers
    const query = _0x1d2bb7;
    const telegramStickerAPI = `https://t.me/addstickers/${encodeURIComponent(query)}`;
    const response = await axios.get(telegramStickerAPI);

    // Check if the sticker pack exists
    if (response.status === 404) {
      return await _0x19564c.reply("❌ *No sticker pack found for this keyword.*");
    }

    // Prepare the response with the sticker pack link
    const message = `✨ *Stickers found for "${query}"* ✨\n\n🔗 [Click here to view the sticker pack](https://t.me/addstickers/${encodeURIComponent(query)})`;

    await _0x19564c.reply(message);

  } catch (error) {
    console.error("Error during tgs command:", error);
    await _0x19564c.reply("❌ *An error occurred while searching for stickers.*");
  }
})
cmd({
  pattern: "tgs2",
  alias: ["sticker", "animatedsticker"],
  desc: "Rechercher et obtenir des stickers animés (TGS) de Telegram",
  category: "downloader",
  react: "🎨",
  filename: __filename
}, async (_0x19564c, _0x1d2bb7) => {
  try {
    // Vérifie si une recherche a été fournie
    if (!_0x1d2bb7) {
      return await _0x19564c.reply("*_Veuillez fournir un nom ou mot-clé pour rechercher des stickers. Exemple : .tgs cats_*");
    }

    // Utilise l'API Telegram pour rechercher des stickers
    const query = _0x1d2bb7;
    const telegramStickerAPI = `https://t.me/addstickers/${encodeURIComponent(query)}`;
    const response = await axios.get(telegramStickerAPI);

    // Vérifie si le pack existe
    if (response.status === 404) {
      return await _0x19564c.reply("❌ *Aucun pack de stickers trouvé pour ce mot-clé.*");
    }

    // Préparation de la réponse avec le lien du pack
    const message = `✨ *Stickers trouvés pour "${query}"* ✨\n\n🔗 [Cliquez ici pour voir le pack de stickers](https://t.me/addstickers/${encodeURIComponent(query)})`;

    await _0x19564c.reply(message);

  } catch (error) {
    console.error("Erreur lors de la commande tgs :", error);
    await _0x19564c.reply("❌ *Une erreur s'est produite lors de la recherche des stickers.*");
  }
})