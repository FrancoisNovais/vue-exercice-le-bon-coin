import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

/* Import de 'fontawesome core' */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import du composant 'vue-fontawesome' */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import des icônes de type 'solid' */
import {
  faCheckDouble,
  faMapMarkerAlt,
  faCircle,
  faSearch,
  faArrowRight,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'

/* Import de l'icône de type 'regular' */
import {
  faPlusSquare,
  faHeart,
  faClock,
  faUser,
  faEyeSlash,
  faEye
} from '@fortawesome/free-regular-svg-icons'

/* Ajout de ces icônes à la bibliothèque de votre projet */
library.add(
  faPlusSquare,
  faHeart,
  faCheckDouble,
  faClock,
  faMapMarkerAlt,
  faUser,
  faCircle,
  faSearch,
  faArrowRight,
  faEyeSlash,
  faAngleLeft,
  faAngleRight,
  faEye
)
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

const userInfos = ref({
  username: '',
  token: ''
})
const changeUserInfos = (infos) => {
  userInfos.value = infos
}

// Création du 'provider'
app.provide('GlobalStore', { userInfos: userInfos, changeUserInfos: changeUserInfos })

app.mount('#app')
