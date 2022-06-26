import Vue from 'vue'
import App from './App.vue'
// fontawsome icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrashCan, faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrashCan, faCheck, faXmark);

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  render: h => h(App),
}).$mount('#app')
