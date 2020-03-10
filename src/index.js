import UIButton from './components/button.vue'
import UICard from './components/card.vue'

export default {
    install (Vue) {
        Vue.component('vish-card', UICard)
        Vue.component('vish-button', UIButton)
    }
}