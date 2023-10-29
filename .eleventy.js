const { fortawesomeBrandsPlugin } = require('@vidhill/fortawesome-brands-11ty-shortcode');

module.exports = function (config) {
  config.addWatchTarget("./src/static/scss/");
  config.addTransform("minify", require("./src/transforms/minify"));

  // Shortcodes
  config.addNunjucksAsyncShortcode('image', require('./src/shortcodes/imageShortcode'));

  // Plugins
  config.addPlugin(fortawesomeBrandsPlugin);

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/static/images/');
  config.addPassthroughCopy('./days-calculator')
  config.addPassthroughCopy('./portfolio-project')
  config.addPassthroughCopy('./speed-game')

  // Returns case studies portfolio items, sorted by display order
  config.addCollection('caseStudies', collection => {
    return collection.getFilteredByGlob('./src/portfolio/*.md').filter(
      x => x.data.caseStudy
    );
  });

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
