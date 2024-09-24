<script setup>
import AddOffer from '@/components/AddOffer.vue'
</script>
<template>
  <div class="bannerAddOffers">
    <img src="../assets/onde-corail.svg" alt="Onde corail" />
    <div>
      <p>C'est le moment de vendre</p>
      <AddOffer />
    </div>
    <img src="../assets/feuille-bleue.svg" alt="Feuille bleue" />
  </div>
</template>
<style>
.bannerAddOffers {
  display: flex;
  justify-content: space-between;
  background-color: var(--orange-pale);
  border-radius: 15px;
  margin-bottom: 20px;
}
.bannerAddOffers p {
  font-size: 20px;
  font-weight: bold;
}
.bannerAddOffers > div {
  display: flex;
  align-items: center;
  gap: 10px;
}
img:first-child {
  border-radius: 15px 0 0 15px;
}
img:last-child {
  border-radius: 0 15px 15px 0;
}
</style>
