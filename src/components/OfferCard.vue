<script setup>
import { computed } from 'vue'

const props = defineProps({
  offerInfos: {
    type: Object,
    required: true
  }
})

const date = computed(() => {
  return props.offerInfos.updatedAt.split('T')[0].split('-').reverse().join('/')
})
</script>

<template>
  <div class="offerCard">
    <div class="partOne">
      <div>
        <img
          :src="offerInfos.owner.data.attributes.avatar.data.attributes.url"
          alt=""
          v-if="offerInfos.owner.data.attributes.avatar.data"
        />
        <p>{{ offerInfos.owner.data.attributes.username }}</p>
      </div>

      <img :src="offerInfos.pictures.data[0].attributes.url" :alt="offerInfos.title" />
      <p>{{ offerInfos.title }}</p>
      <p>{{ offerInfos.price }} €</p>
    </div>
    <div class="partTwo">
      <p>{{ date }}</p>
      <font-awesome-icon :icon="['far', 'heart']" />
    </div>
  </div>
</template>

<style scoped>
.offerCard {
  height: 380px;
  /* Calcul de la largeur => 100% de la largeur du parent, moins l'espace entre chaque 'Card' (5 cartes donc 4 espaces => 15px x 4). Le tout divisé par le nombre de carte souhaité sur la ligne */
  width: calc((100% - 60px) / 5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.partOne > div {
  display: flex;
  align-items: center;
  gap: 5px;
}
.partOne > div > p {
  font-weight: bold;
}
.partOne > p {
  margin: 5px 0;
  font-weight: bold;
  font-size: 18px;
}
.partOne > div img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
}
.partOne img {
  height: 240px;
  width: 100%;
  border-radius: 10px;
  margin: 7px 0 5px;
  object-fit: cover;
}
.partTwo {
  display: flex;
  justify-content: space-between;
}
</style>
