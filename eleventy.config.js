import { fortawesomeBrandsPlugin } from '@vidhill/fortawesome-brands-11ty-shortcode';
import minify from "./src/transforms/minify.js";
import imageShortcode from "./src/shortcodes/imageShortcode.js";

export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/static/scss/");
  eleventyConfig.addTransform("minify", minify);

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);

  // Plugins
  eleventyConfig.addPlugin(fortawesomeBrandsPlugin);

  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/static/images/');
  eleventyConfig.addPassthroughCopy('./days-calculator')
  eleventyConfig.addPassthroughCopy('./portfolio-project')
  eleventyConfig.addPassthroughCopy('./speed-game')

  // Returns case studies portfolio items, sorted by display order
  eleventyConfig.addCollection('caseStudies', collection => {
    return collection.getFilteredByGlob('./src/portfolio/*.md').filter(
      x => x.data.caseStudy
    );
  });
};

export const config = {
  markdownTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  dir: {
    input: 'src',
    output: 'public',
  },
}
