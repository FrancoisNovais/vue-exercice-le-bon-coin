<script setup>
// Import du package 'axios'
import axios from 'axios'

// Import du hook
import { onMounted, ref, computed } from 'vue'

// Import 'useCycleList'
import { useCycleList } from '@vueuse/core'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// Récuperation de la premiére lettre de l'username pour avatar par défaut
const blanckAvatar = computed(() => {
  return offerInfos.value.data.attributes.owner.data.attributes.username.substr(0, 1).toUpperCase()
})

// Mise en forme de la date
const date = computed(() => {
  return offerInfos.value.data.attributes.updatedAt.split('T')[0].split('-').reverse().join('/')
})

// Mise en forme du prix
const price = computed(() => {
  return Intl.NumberFormat().format(offerInfos.value.data.attributes.price)
})

//  Carrousel d'images
const cyclelist = computed(() => {
  if (offerInfos.value.data.attributes.pictures.data) {
    const { state, next, prev } = useCycleList(offerInfos.value.data.attributes.pictures.data)

    return { state, next, prev }
  } else {
    return {}
  }
})

// Initialisation de la valeur réactive
const offerInfos = ref(null)

onMounted(async () => {
  try {
    //  Destruction de la clé 'data'. Pour rappel, les données reçus d'une requête faite avec axios se trouve toujours à la clé 'data'
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`
    )

    // Visualisation des données reçus dans la console du navigateur
    console.log('Data OfferView >>>', data)

    // Transmission des données à la valeur réactive 'offersList'
    offerInfos.value = data
  } catch (error) {
    // Visualisation de l'erreur dans la console du navigateur
    console.log('catch OfferView >>>', error)
  }
})
</script>
<template>
  <main>
    <div class="container">
      <p v-if="offerInfos === null">En cours de chargement ...</p>
      <div class="offer" v-else>
        <div class="partOne">
          <div class="offerImages">
            <font-awesome-icon
              :icon="['fas', 'angle-left']"
              @click="cyclelist.prev()"
              v-if="offerInfos.data.attributes.pictures.data?.length > 1"
            />

            <img
              :src="cyclelist.state.value.attributes.url"
              :alt="offerInfos.data.attributes.title"
              v-if="cyclelist.state"
            />
            <font-awesome-icon
              :icon="['fas', 'angle-right']"
              @click="cyclelist.next()"
              v-if="offerInfos.data.attributes.pictures.data?.length > 1"
            />
          </div>
          <h1>{{ offerInfos.data.attributes.title }}</h1>
          <p id="price">{{ price }} €</p>
          <p id="date">{{ date }}</p>
          <h2>Description</h2>
          <p>{{ offerInfos.data.attributes.description }}</p>
          <p id="city">
            <font-awesome-icon :icon="['fas', 'map-pin']" /> Agon-Coutainville (50230)
          </p>
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
            <p id="identity">
              <font-awesome-icon :icon="['fas', 'check-double']" /> Pièce d'identité vérifiée
            </p>
            <p><font-awesome-icon :icon="['far', 'clock']" /> Répond généralement en 1 heure</p>
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
.offer {
  display: flex;
  gap: 20px;
  padding-top: 30px;
}
.partOne {
  width: 65%;
}
.offerImages {
  display: flex;
  align-items: center;
}
.offerImages svg {
  font-size: 25px;
  cursor: pointer;
  color: var(--grey);
}
.offerImages img {
  width: 100%;
  height: 350px;
  object-fit: contain;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}

#price {
  font-size: 18px;
  font-weight: bold;
}
#date {
  font-size: 12px;
  margin-top: 20px;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 50px 0 25px;
  padding-top: 20px;
  border-top: 1px solid var(--grey-med);
}
#city {
  border-top: 1px solid var(--grey-med);
  margin: 50px 0 25px;
  padding-top: 20px;
}
.partTwo {
  width: 35%;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
.partTwo > div > div p {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
img {
  width: 300px;
}
.blanckAvatar {
  width: 65px;
  height: 65px;
}
#identity {
  font-size: 14px;
  color: var(--brown);
  background-color: var(--orange-pale);
  border-radius: 10px;
  padding: 4px 7px;
  align-self: flex-start;
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
