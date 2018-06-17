# Handlebars Prototyping Boilerplate

Boilerplate for quick prototyping with Handlebars, jQuery, and Sass. Includes basic ESLint rules.

## Project Directory

- `src/`
  - `hbs/`: Include all partials in this folder.
    - `page-content.handlebars`: Any markup in this file is what will be compiled and rendered to the page.
  - `helpers/`: Any custom Handlebars helpers you need to create should be placed in this folder.
  - `images/`: Any images you need should be placed in this folder.
  - `js/main.js`: Any javascript that is not a Handlebars helper should go in this file.
  - `sass/`: Contains all Sass files.
    - `main.scss`: Write your styles here or import other Sass files into this file.
  - `index.html`: You should only need to edit this if you want to include references to additonal third-party scripts.

## Development

- Install dependencies: `$ npm i`
- Start development server with live-reloading: `$ gulp dev`
- Lint your javascript: `$ npm run lint`

## Build

- Build project to `build/` folder: `$ gulp build`
