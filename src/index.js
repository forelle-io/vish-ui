import UIButton from './components/button.vue'
import UICard from './components/card.vue'

export default {
    install (Vue) {
        Vue.component('ui-card', UICard)
        Vue.component('ui-button', UIButton)
    }
}