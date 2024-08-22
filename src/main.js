import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Import de 'fontawesome core' */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import du composant 'vue-fontawesome' */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import des icônes de type 'solid' */
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

/* Import de l'icône de type 'regular' */
import { faHeart, faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons'

/* Ajout de ces icônes à la bibliothèque de votre projet */
library.add(faSearch, faPlusSquare, faUser, faCircle, faHeart)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
