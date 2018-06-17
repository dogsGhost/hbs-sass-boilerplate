const config = {
  sourceDir: './src/',
  buildDir: './build/',
  images: {
    src: './src/images/**/*.{jpeg,jpg,png,gif,svg}',
    dest: './build/images/'
  },
  scripts: {
    src: 'js/*.js',
    dest: ''
  },
  styles: {
    src: 'sass/main.scss',
    dest: ''
  },
  templates: {
    src: 'hbs/',
    dest: 'hbs.js'
  },
};

export default config;
