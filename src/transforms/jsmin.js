import { minify } from "terser";

export default async (content, outputPath) => {
  const minified = await minify(content, {});
  return minified.code;
};
