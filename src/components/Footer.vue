<template>
  <footer>
    <p>
      Made by <a href="https://github.com/FrancoisNovais">François</a> with
      <a href="https://vuejs.org/">Vue.js</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-light);
}
a {
  text-decoration: none;
  font-weight: bold;
}
</style>
