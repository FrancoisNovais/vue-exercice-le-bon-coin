<script setup>
// Import du package 'axios'
import axios from 'axios'

// Import des components'
import OfferCard from '@/components/OfferCard.vue'
import TimeToSell from '@/components/TimeToSell.vue'

// Import du hook
import { onMounted, ref } from 'vue'

// Initialisation de la valeur réactive à un object vide
const offersList = ref({})

onMounted(async () => {
  try {
    //  Destruction de la clé 'data'. Pour rappel, les données reçus d'une requête faite avec axios se trouve toujours à la clé 'data'
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar`
    )

    // Visualisation des données reçus dans la console du navigateur
    console.log('Data >>>', data)

    // Transmission des données à la valeur réactive 'offersList'
    offersList.value = data
  } catch (error) {
    // Visualisation de l'erreur dans la console du navigateur
    console.log('catch >>>', error)
  }
})
</script>

<template>
  <main>
    <div class="container">
      <p class="topLine">
        Des millions de petites annonces et autant d'occasions de se faire plaisir
      </p>

      <TimeToSell />

      <!-- SI la valeur reactive est un tableau vide, alors nous affichons le texte "En cours de chargement..." -->
      <p v-if="!offersList.data">En cours de chargement ...</p>

      <!-- SINON nous affichons la liste -->
      <div v-else class="offers">
        <!-- Appel du composant offerCart -->

        <OfferCard
          v-for="offer in offersList.data"
          :key="offer.id"
          :offerInfos="offer.attributes"
          :id="offer.id"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.topLine {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0;
}

.offers {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 15px;
}
</style>
