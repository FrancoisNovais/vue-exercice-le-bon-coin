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
  <div>
    <img
      :src="offerInfos.owner.data.attributes.avatar.data.attributes.url"
      alt=""
      v-if="offerInfos.owner.data.attributes.avatar.data"
    />
    <p>{{ offerInfos.owner.data.attributes.username }}</p>
    <img :src="offerInfos.pictures.data[0].attributes.url" :alt="offerInfos.title" />
    <p>{{ offerInfos.title }}</p>
    <p>{{ offerInfos.price }} €</p>
    <p>{{ date }}</p>
    <font-awesome-icon :icon="['far', 'heart']" />
  </div>
</template>

<style scoped></style>
