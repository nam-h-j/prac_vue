<script>
import "./LandingPageLayout.scss";
import NavigationTop from "../Modules/NavigationTop";
export default {
  name: "LandingPageLayout",
  components: { NavigationTop },
};
</script>

<template>
  <div class="LandingPageLayout">
    <NavigationTop></NavigationTop>
    <h1>레이아웃 영역</h1>
    <slot> </slot>
  </div>
</template>
