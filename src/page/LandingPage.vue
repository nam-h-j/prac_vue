<script>
import LandingPageLayout from "../components/Layouts/LandingPageLayout";
export default {
  name: "LandingPage",
  components: {
    LandingPageLayout,
  },
};
</script>

<template>
  <div>
    <h1>Page Area</h1>
    <LandingPageLayout>Slot Here</LandingPageLayout>
  </div>
</template>
