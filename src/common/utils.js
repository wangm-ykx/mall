// bscrol刷新防抖
export function debounce(func, delay = 1000) {
  let timer = null
  return function () {
    let context = this
    if(timer) clearTimeout()
    timer = setTimeout(() => {
      func.apply(context)
    }, delay)
  }
}
