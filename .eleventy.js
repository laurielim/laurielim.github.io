module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './public/static/**/*.css',
  });

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/static/images/');

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