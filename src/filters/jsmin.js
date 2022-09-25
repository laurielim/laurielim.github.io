const Terser = require("terser");

module.exports = () => {
  return async (code, opts={}) => {
    try {
      const minified = await Terser.minify(code, opts);
      return minified.code;
    } catch (err) {
      console.error(err);
      // Unexpected minify error. Return unminified code.
      return code;
    }
  }
};
