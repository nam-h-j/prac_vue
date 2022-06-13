<script>
import PageLayout from "../components/Layouts/PageLayout";
import ParentCounterVuex from "../components/Modules/ParentCounterVuex";

export default {
  name: "LandingPage",
  components: {
    PageLayout,
    ParentCounterVuex,
  },
};
</script>

<template>
  <div>
    <h1>state test page with vuex</h1>
    <PageLayout><ParentCounterVuex /></PageLayout>
  </div>
</template>
