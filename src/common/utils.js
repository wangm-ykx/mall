// bscrol刷新防抖
export function debounce(func, delay = 1000) {
  let timer = null
  return function () {
    if(timer) clearTimeout()
    timer = setTimeout(() => {
      func.apply(this)
    }, delay)
  }
}
