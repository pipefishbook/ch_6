.PHONY:	jst eco

jst:
	browserify -t jstify ./app/main.js > static/bundle.js

eco:
	browserify -t browserify-eco ./app/main.js > static/bundle.js

watch:
	watchify -t jstify ./app/main.js -o static/bundle.js
