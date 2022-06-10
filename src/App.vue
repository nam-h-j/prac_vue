<script>
import "./scss/GlobalStyle.scss";
import LandingPage from "./page/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
};
</script>

<template>
  <div id="app">
    <LandingPage />
  </div>
</template>
