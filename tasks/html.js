const {
	src,
	dest
} = require('gulp');
const include = require('gulp-file-include');
const bs = require('browser-sync');

module.exports = function html() {
	return src(['src/view/**/*.html', '!src/view/components/**/*.html'])
		.pipe(include())
		.pipe(dest('public_html'))
		.pipe(bs.stream())
}
