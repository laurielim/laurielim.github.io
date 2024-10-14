export default function () {
  return {
    layout: "layouts/post.html",
    permalink: function({page}) {
      return `/posts/${ page.fileSlug }/`
    },
    tags: ["writing"],
  }
}