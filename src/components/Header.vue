<script setup></script>
<template>
  <header>
    <div class="container">
      <div class="top-header">
        <div>
          <img src="../assets/logo.svg" alt="Logo Leboncoin" />
        </div>
        <div class="middle-part">
          <button><font-awesome-icon :icon="['far', 'plus-square']" />Déposser une annonce</button>
          <div>
            <input type="text" placeholder="Rechercher sur leboncoin" />
            <font-awesome-icon :icon="['fas', 'search']" />
          </div>
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
  border-bottom: 1px solid black;
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
}
.right-part > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 140px;
}
#circle {
  font-size: 3px;
}
</style>
