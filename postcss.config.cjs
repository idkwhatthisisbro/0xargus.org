const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
<<<<<<< HEAD
		tailwindcss({}),
		//But others, like autoprefixer, need to run after,
		autoprefixer({})
=======
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
>>>>>>> origin/master
	]
};

module.exports = config;
