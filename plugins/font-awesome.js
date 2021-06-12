import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faUbuntu } from '@fortawesome/free-brands-svg-icons/faUbuntu'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

import faPopOs from '~/icons/fa-pop-os'

config.autoAddCss = false

library.add(faUbuntu)
library.add(faPopOs)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
