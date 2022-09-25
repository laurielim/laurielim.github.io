const { fortawesomeBrandsPlugin } = require('@vidhill/fortawesome-brands-11ty-shortcode');
// Filters
const jsmin = require('./src/filters/jsmin')

module.exports = function (config) {
  config.addWatchTarget("./src/static/scss/");
  config.addNunjucksAsyncFilter('jsmin', jsmin);

  // Plugins
  config.addPlugin(fortawesomeBrandsPlugin);

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/static/images/');
  config.addPassthroughCopy('./days-calculator')
  config.addPassthroughCopy('./portfolio-project')
  config.addPassthroughCopy('./speed-game')

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
