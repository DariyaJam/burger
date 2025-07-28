export default {
  mounted(el: any, binding: any) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
      root: el.parentNode
    }

    const callback = (entries: any, observer: any) => {
      if (entries[0].isIntersecting) {
        binding.value()
      } else {

      }
    }


    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  },
  name: 'intersection'
}