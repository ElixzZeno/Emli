const axios = require('axios');
const { getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: "gen",
		author: "OtinXSandip",
		version: "1.5",
		countDown: 10,
		role: 0,
		shortDescription: "",
		longDescription: "generate images",
		category: "ai",
		guide: {
			vi: "{pn}"
		}
	},
	langs: {
		en: {
			loading: "Initializing image, please wait...",
			error: "An error occurred, please try again later"
		}
	},

	onStart: async function ({ args, message, getLang }) {
		message.reply(getLang("loading"));
		try {
const prompt = args.join(" ");
			const { data } = await axios.get(`https://shivadon.onrender.com/gen?prompt=${prompt}`);
			const imageRandom = await getStreamFromURL(data.url);
			return message.reply({
				attachment: imageRandom
			});
		}
		catch (err) {
			return message.reply(getLang("error"));
		}
	}
};