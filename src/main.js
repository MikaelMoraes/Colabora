import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faChevronDown, faArrowDownShortWide, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import {faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faArrowDownShortWide, faUser, faCode );
library.add(faReact, faHtml5);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
