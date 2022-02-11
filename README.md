# Lothliel

A SASS library project

First off you want to copy the lothliel folder and gulpfile.js into your project, and then you've got to run:

```bash
npm install
```

this creates a package.json so you can install further dependencies, for the gulp dependency to work you gotta install it by running:

```bash
npm install gulp gulp-sass sass --save-dev
```

and then you need to install: "gulp purge css"; this is a plugin for gulp that removes only the not used css rules, so the file is way lighter, for this type:

```bash
npm install gulp-purgecss --save-dev
```

... Do not worry, the gupfile.js already has it included.

For you to make changes to the library without actually affecting it, you need to create a new folder (sass in this example) and a new entry file inside of it, say index.scss...

Then, for it to be watched instead of the index.scss that is originally on the project files (lothliel folder), in gulpfile.js instead of lothliel, you gotta watch the sass folder you recently created. In the below code -which is the included gulpfile.js- just replace ^^lothliel^^ for ^^sass^^, like so:

```javascript

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss"); // The css-purge plugin.

function buildStyles() {
return src("^^sass^^/**/*.scss")s
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] })) // This is to purge the non-used css files on the output file (index.css)
    .pipe(dest("css"));
}

function watchTask() {
    watch(["^^sass^^/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);

```

And there you go!
