<script>
import "./PageLayout.scss";
import NavigationTop from "../Modules/NavigationTop";
export default {
  name: "PageLayout",
  components: { NavigationTop },
};
</script>

<template>
  <div class="PageLayout">
    <NavigationTop></NavigationTop>
    <h1>각 페이지의 레이아웃 영역</h1>
    <slot> </slot>
  </div>
</template>
