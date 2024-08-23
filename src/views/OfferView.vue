<script setup>
// Import du package 'axios'
import axios from 'axios'

// Import du hook
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// Initialisation de la valeur réactive
const offerInfos = ref(null)

const blanckAvatar = computed(() => {
  return offerInfos.value.data.attributes.owner.data.attributes.username.substr(0, 1).toUpperCase()
})

onMounted(async () => {
  try {
    //  Destruction de la clé 'data'. Pour rappel, les données reçus d'une requête faite avec axios se trouve toujours à la clé 'data'
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`
    )

    // Visualisation des données reçus dans la console du navigateur
    console.log('Data >>>', data)

    // Transmission des données à la valeur réactive 'offersList'
    offerInfos.value = data
  } catch (error) {
    // Visualisation de l'erreur dans la console du navigateur
    console.log('catch >>>', error)
  }
})
</script>
<template>
  <main>
    <div class="container">
      <p v-if="offerInfos === null">En cours de chargement ...</p>
      <div class="offer" v-else>
        <div class="partOne">
          <img :src="offerInfos.data.attributes.pictures.data[0].attributes.url" />
          <p>{{ offerInfos.data.attributes.title }}</p>
          <p>{{ offerInfos.data.attributes.price }} €</p>
          <p>{{ offerInfos.data.attributes.updatedAt }}</p>
          <p>Description</p>
          <p>{{ offerInfos.data.attributes.description }}</p>
          <p>Agon-Coutainville (50230)</p>
        </div>
        <div class="partTwo">
          <div>
            <div>
              <div
                class="blanckAvatar"
                v-if="offerInfos.data.attributes.owner.data.attributes.avatar.data === null"
              >
                <p>{{ blanckAvatar }}</p>
              </div>
              <img
                v-else
                :src="offerInfos.data.attributes.owner.data.attributes.avatar.data.attributes.url"
                alt=""
              />
              <p>{{ offerInfos.data.attributes.owner.data.attributes.username }}</p>
            </div>
            <p>Pièce d'identité vérifiée</p>
            <p>Répond généralement en 1 heure</p>
          </div>
          <div>
            <button>Acheter</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
.offer {
  display: flex;
}
.partOne {
  width: 65%;
}
.partOne img {
  width: 100%;
  height: 350px;
  object-fit: contain;
}

.partTwo {
  width: 35%;
}

.partTwo img {
  height: 65px;
  width: 65px;
  border-radius: 50%;
  object-fit: cover;
}
.partTwo > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.partTwo > div:last-of-type {
  margin-top: 15px;
  padding: 15px 0;
  border-top: 1px solid var(--grey-med);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.partTwo > div > div {
  display: flex;
  gap: 10px;
}
img {
  width: 300px;
}
.blanckAvatar {
  width: 30px;
  height: 30px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
button {
  border: none;
  color: #fff;
  padding: 15px;
  border-radius: 15px;
  font-weight: 700;
  font-size: inherit;
}
button:first-of-type {
  background-color: var(--orange);
}
button:last-of-type {
  background-color: var(--blue-dark);
}
</style>
