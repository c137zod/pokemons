import { Directive } from "vue"

const intersectionDirective: Directive<HTMLElement, () => void> = {
  mounted(el: HTMLElement, binding) {
    const options: IntersectionObserverInit = {
      rootMargin: "0px",
      threshold: 1.0,
    }

    const callback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  },
}

export default intersectionDirective
