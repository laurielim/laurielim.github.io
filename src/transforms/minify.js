import { extname } from 'node:path'
import htmlmin from "./htmlmin.js"
import jsmin from "./jsmin.js"

export default async (content, outputPath) => {
  if (!outputPath) return content;

  const ext = extname(outputPath);
  switch (ext) {
    case ".html":
      return htmlmin(content, outputPath);
    case ".js":
      return jsmin(content, outputPath);
    default:
      return content;
  }
}
