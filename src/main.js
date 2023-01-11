import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faChevronDown, faArrowDownShortWide, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import {faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faArrowDownShortWide, faUser, faCode );
library.add(faReact, faHtml5);

const Vue = createApp(App)
Vue.use(router)
.component('fa', FontAwesomeIcon)
Vue.mount('#app')





