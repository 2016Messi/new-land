export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangyue/data/new-land/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"互联网人考公指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wangyue/data/new-land/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
