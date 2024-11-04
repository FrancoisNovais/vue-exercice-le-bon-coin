<script setup>
import { RouterLink } from 'vue-router'
import { inject } from 'vue'

import BtnPublishOffer from './BtnPublishOffer.vue'

const GlobalStore = inject('GlobalStore')

const disconnection = () => {
  // Suppression du cookie
  $cookies.remove('userInfos')

  GlobalStore.changeUserInfos({
    username: '',
    token: ''
  })
}
</script>

<template>
  <header>
    <div class="container">
      <div class="topBloc">
        <RouterLink :to="{ name: 'home' }">
          <img src="../assets/img/logo.svg" alt="" />
        </RouterLink>

        <div class="middlePart">
          <BtnPublishOffer />

          <div>
            <input type="text" name="search" id="search" placeholder="Rechercher sur leboncoin" />
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </div>
        </div>

        <div class="rightPart">
          <div v-if="GlobalStore.userInfos.value.username">
            <div class="connection">
              <font-awesome-icon :icon="['far', 'user']" />
              <p>{{ GlobalStore.userInfos.value.username }}</p>
            </div>

            <div>
              <font-awesome-icon
                :icon="['fas', 'arrow-right-from-bracket']"
                @click="disconnection"
                class="disconnection"
              />
            </div>
          </div>

          <RouterLink :to="{ name: 'login' }" class="connection" v-else>
            <font-awesome-icon :icon="['far', 'user']" />

            <p>Se connecter</p>
          </RouterLink>
        </div>
      </div>

      <div class="bottomBloc">
        <span>Immobilier</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Véhicules</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Locations de vacances</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Emploi</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Mode</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Maison & Jardin</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Famille</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Electronique</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Loisirs</span>

        <font-awesome-icon :icon="['fas', 'circle']" />

        <span>Autres</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid var(--grey);
  /* -- Bonus 1 - Pour que le 'header' reste en haut de la page */
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
  height: var(--header-height);
}
.container {
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  width: 140px;
}
/* -- TOP BLOC ---------------- */
.topBloc {
  display: flex;
  justify-content: space-between;
}
.topBloc p {
  font-size: 12px;
}
.middlePart {
  display: flex;
  align-items: center;
  gap: 20px;
}
.middlePart > div {
  display: flex;
  background-color: var(--grey-light);
  padding: 7px;
  border-radius: 10px;
  width: 300px;
}

.middlePart input {
  background-color: inherit;
  border: none;
  flex: 1;
}
.middlePart svg {
  background-color: var(--orange);
  padding: 8px;
  box-sizing: content-box;
  border-radius: 7px;
}
.middlePart input::placeholder {
  color: var(--black);
  font-size: 16px;
}
.rightPart > div {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
  font-size: 16px;
}
.disconnection {
  cursor: pointer;
  color: var(--grey);
}
.connection {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: none;
  background-color: #ffffff00;
}
/* -- BOTTOM BLOC ---------------- */
.bottomBloc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.bottomBloc svg {
  color: var(--black);
  font-size: 2px;
}
</style>
