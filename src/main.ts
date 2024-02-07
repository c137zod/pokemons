import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"
import { createPinia } from "pinia"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "@/graphql/apollo-client"
import directive from "@/directives/VIntersection"

loadFonts()

createApp(App).provide(DefaultApolloClient, apolloClient).use(createPinia()).use(router).use(vuetify).directive("intersection", directive).mount("#app")
