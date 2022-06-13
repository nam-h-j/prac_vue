<script>
import PageLayout from "../components/Layouts/PageLayout";
import ParentCounter from "@/components/Modules/ParentCounter";
export default {
  name: "LandingPage",
  components: {
    PageLayout,
    ParentCounter,
  },
};
</script>

<template>
  <div>
    <h1>state test Page using data() and props</h1>
    <PageLayout><ParentCounter /></PageLayout>
  </div>
</template>
