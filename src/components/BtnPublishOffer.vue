<script setup></script>

<template>
  <button>
    <font-awesome-icon :icon="['far', 'plus-square']" />

    <span>Déposer une annonce</span>
  </button>
</template>

<style scoped>
button {
  background-color: var(--orange);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;

  font-weight: bold;
}
span {
  margin-left: 10px;
}
</style>
