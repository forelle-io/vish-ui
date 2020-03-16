import UIButton from './components/button.vue'
import UICard from './components/card.vue'
import UIInput from './components/input.vue'
import UIRow from './components/row.vue'

export default {
    install (Vue) {
        Vue.component('vish-card', UICard)
        Vue.component('vish-button', UIButton)
        Vue.component('vish-input', UIInput)
        Vue.component('vish-row', UIRow)
    }
}