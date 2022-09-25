// Filters
const jsmin = require('./src/filters/jsmin')

module.exports = function (config) {
  config.addWatchTarget("./src/static/scss/");
  config.addNunjucksAsyncFilter('jsmin', jsmin);

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
