<script setup></script>
<template>
  <header>
    <div class="container">
      <div>
        <div>
          <img src="../assets/logo.svg" alt="Logo Leboncoin" />
        </div>
        <div>
          <button><font-awesome-icon :icon="['far', 'plus-square']" />Déposser une annonce</button>
          <div>
            <input type="text" placeholder="Rechercher sur leboncoin" />
            <font-awesome-icon :icon="['fas', 'search']" />
          </div>
        </div>
        <div>
          <div>
            <font-awesome-icon :icon="['far', 'user']" />
            <p>Se connecter</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.container > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 140px;
}
</style>
