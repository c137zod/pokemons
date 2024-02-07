import { onMounted } from "vue"
import { onBeforeRouteLeave, useRoute } from "vue-router"

export function useScrollPosition() {
  const route = useRoute()

  onBeforeRouteLeave(() => {
    localStorage.setItem(`scrollPosition-${route.path}`, window.scrollY.toString())
  })

  onMounted(() => {
    const savedPosition = localStorage.getItem(`scrollPosition-${route.path}`)
    if (savedPosition !== null) {
      window.scrollTo(0, parseInt(savedPosition, 10))
      localStorage.removeItem(`scrollPosition-${route.path}`)
    }
  })
}
