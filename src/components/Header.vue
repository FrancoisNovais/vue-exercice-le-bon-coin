<script setup>
import { RouterLink } from 'vue-router'
import AddOffer from '@/components/AddOffer.vue'
</script>
<template>
  <header>
    <div class="container">
      <div class="top-header">
        <div>
          <RouterLink :to="{ name: 'home' }"
            ><img src="../assets/logo.svg" alt="Logo Leboncoin" />
          </RouterLink>
        </div>
        <div class="middle-part">
          <AddOffer />

          <input type="text" placeholder="Rechercher sur leboncoin" />
          <font-awesome-icon :icon="['fas', 'search']" />
        </div>
        <div class="right-part">
          <div>
            <font-awesome-icon :icon="['far', 'user']" />
            <p>Se connecter</p>
          </div>
        </div>
      </div>

      <div class="bottom-header">
        <p>Immobilier</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Véhicules</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Locations de vacances</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Emploi</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Mode</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Maison & Jardin</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Famille</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Electronique</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Loisirs</p>
        <font-awesome-icon :icon="['fas', 'circle']" id="circle" />
        <p>Autres</p>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  border-bottom: 1px solid var(--black);
  height: var(--header-height);
}
.container {
  height: 100%;
  padding: 10px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.middle-part {
  display: flex;
  align-items: center;
  gap: 20px;
}
.right-part > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
img {
  width: 140px;
}
#circle {
  font-size: 3px;
}
input {
  padding: 8px;
  border: none;
}
.middle-part svg {
  background-color: var(--orange);
  padding: 8px;
  box-sizing: content-box;
  border-radius: 7px;
  color: white;
}
</style>
