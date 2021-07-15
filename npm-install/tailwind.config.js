const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		// ここに書くと追加ではなくデフォルトの設定が上書きされる
		extend: {
			// デフォルトの設定に追加する場合はこの中に書く
			colors: {
				teal: colors.teal,
				hobby: {
					100: "#001871",
					200: "#ff585d",
					300: "#ffb549",
					400: "#41b6e6",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
