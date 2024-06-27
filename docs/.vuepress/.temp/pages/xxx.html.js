import comp from "/Users/wangyue/data/new-land/docs/.vuepress/.temp/pages/xxx.html.vue"
const data = JSON.parse("{\"path\":\"/xxx.html\",\"title\":\"22\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1718273698000,\"contributors\":[{\"name\":\"2016Messi\",\"email\":\"wy99599@163.com\",\"commits\":1}]},\"filePathRelative\":\"xxx.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
