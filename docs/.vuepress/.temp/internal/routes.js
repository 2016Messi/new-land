export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangyue/data/new-land/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"互联网人考公指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wangyue/data/new-land/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/xxx.html", { loader: () => import(/* webpackChunkName: "xxx.html" */"/Users/wangyue/data/new-land/docs/.vuepress/.temp/pages/xxx.html.js"), meta: {"title":"22"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
