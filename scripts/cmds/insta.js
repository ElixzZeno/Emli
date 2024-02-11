const axios = require('axios');

module.exports = {
  config: {
    name: "insta",
    aliases: ["videofb"],
    version: 2.0,
    author: "OtinXSandip",
    description: "ai",
    role: 0,
    category: "media",
    guide: {
      en: "{p}{n} link",
    },
  },
  onStart: async function ({ message, usersData, event, api, args }) {
    try {
      const url = args.join(" ");
   if (!url) {
return message.reply("please provide link");
}
    let puti = `https://sandipapi.onrender.com/insta?url=${url}`;
  let  sanobhai= await axios.get(puti);
let lado = sanobhai.data;
var baby = await require('tinyurl').shorten(lado);

      message.reply({ 
body: ` ${baby}`,
        attachment: await global.utils.getStreamFromURL(lado)
      });  


    } catch (error) {
      console.error("Error:", error.message);
      message.reply({ body: `❌ An error occurred` });
    }
  }
};