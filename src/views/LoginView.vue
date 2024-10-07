<script setup>
import { RouterLink, useRouter } from 'vue-router' // Importation pour gérer la navigation avec Vue Router
import { ref, inject } from 'vue' // ref pour les variables réactives, inject pour accéder aux dépendances globales
import axios from 'axios' // Axios pour effectuer des requêtes HTTP

const router = useRouter() // Utilisation du router pour la navigation
const Store = inject('GlobalStore') // Récupération du store global pour stocker les infos utilisateur

// Variables réactives pour stocker les valeurs du formulaire et l'état du composant
const email = ref('') // Email
const password = ref('') // Mot de passe
const isSubmitting = ref(false) // Indicateur pour savoir si le formulaire est en cours de soumission
const errorMessage = ref('') // Message d'erreur en cas de problème
const displayPassword = ref(false) // Contrôle l'affichage du mot de passe (texte ou caché)

// Fonction pour gérer la soumission du formulaire
const handleSubmit = async () => {
  try {
    isSubmitting.value = true // Active l'état de soumission

    // Vérifie si tous les champs sont remplis
    if (email.value && password.value) {
      // Envoi d'une requête POST à l'API pour authentifier l'utilisateur
      const { data } = await axios.post(
        'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
        {
          identifier: email.value,
          password: password.value
        }
      )

      // Mise à jour du store global avec les infos de l'utilisateur et le token
      Store.changeUserInfos({
        username: data.user.username, // Nom d'utilisateur
        token: data.jwt // Jeton d'authentification (JWT)
      })

      // Redirige l'utilisateur vers la page d'accueil après authentification
      router.push({ name: 'home' })
    } else {
      // Affiche un message d'erreur si les champs ne sont pas remplis
      errorMessage.value = 'Veuillez remplir tous les champs'
    }
  } catch (error) {
    // Gestion des erreurs de la requête
    console.log('LoginView - catch>>', error)

    if (error.response) {
      // Affiche le message d'erreur renvoyé par l'API
      errorMessage.value = error.response.data.error.message
    } else {
      // Affiche un message d'erreur générique
      errorMessage.value = 'Un problème est survenu, veuillez essayer à nouveau'
    }
  }
  // Réinitialise l'état de soumission après la tentative
  isSubmitting.value = false
}
</script>

<template>
  <main>
    <div class="container">
      <div>
        <div>
          <h2>Bonjour !</h2>
          <p>Connectez-vous pour découvrir toutes nos fonctionnalités.</p>
        </div>
        <!-- Formulaire d'inscription -->
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="email">E-mail *</label>
            <!-- Champ pour l'email -->
            <!-- v-model="email" - Liaison avec la variable réactive `email` -->
            <!-- @input="() => (errorMessage = '')" - Réinitialise le message d'erreur à chaque saisie -->
            <input type="email" id="email" v-model="email" />
          </div>
          <div>
            <label for="password">Mot de passe *</label>
            <div class="passwordInput">
              <!-- Champ pour le mot de passe avec possibilité d'afficher/masquer -->
              <!-- :type="displayPassword ? 'text' : 'password'" - Change le type selon la valeur de `displayPassword` -->
              <input
                :type="displayPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                @input="() => (errorMessage = '')"
              />
              <div>
                <!-- Icones pour afficher ou masquer le mot de passe -->
                <!-- @click="() => (displayPassword = !displayPassword)" - Bascule entre l'affichage/masquage du mot de passe -->
                <font-awesome-icon
                  :icon="['far', 'eye']"
                  v-if="displayPassword"
                  @click="() => (displayPassword = !displayPassword)"
                />
                <font-awesome-icon
                  :icon="['far', 'eye-slash']"
                  v-else
                  @click="() => (displayPassword = !displayPassword)"
                />
              </div>
            </div>
          </div>

          <!-- Bouton de soumission -->
          <!-- Affichage conditionnel selon si la soumission du formulaire est en cours ou non -->
          <button type="button" v-if="isSubmitting">Connexion en cours ...</button>
          <button v-else>Se connecter <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>

          <!-- Affichage du message d'erreur si `errorMessage` contient une valeur -->
          <p v-if="errorMessage">{{ errorMessage }}</p>
        </form>

        <!-- Lien vers la page de connexion pour les utilisateurs déjà inscrits -->
        <p>
          Envie de nous rejoindre ?
          <RouterLink :to="{ name: 'signup' }"> Créer un compte </RouterLink>
        </p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.container {
  height: calc(100vh - var(--header-height) - var(--footer-height));
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/illustration.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}
.container > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 500px;
  box-shadow: 0 0 7px 1px var(--grey-med);
  padding: 30px;
  background-color: white;
  border-radius: 20px;
}
h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin: 30px 0;
}
form > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input {
  border: 1px solid var(--grey);
  height: 45px;
  border-radius: 15px;
  padding-left: 10px;
}
.passwordInput {
  display: flex;
}
.passwordInput > div {
  border: 1px solid var(--grey);
  display: flex;
  align-items: center;
  border-left: none;
  color: var(--grey);
  height: 45px;
  border-radius: 0 15px 15px 0;
  width: 40px;
  padding: 10px;
}
.passwordInput input {
  flex: 1;
  border-radius: 15px 0 0 15px;
}
button {
  background-color: var(--orange);
  border: none;
  border-radius: 15px;
  height: 45px;
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
a {
  font-weight: bold;
}
</style>
