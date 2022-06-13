<script>
// App.vue(Parent)
import ChildCounterVuex from "./ChildCounterVuex.vue";
import "./ParentCountVuex.scss";

export default {
  name: "ParentCountVuex",
  components: {
    ChildCounterVuex,
  },
  methods: {
    // 이벤트 추가
    addCount() {
      this.$store.state.countSlice.count++;
    },
    subCount() {
      this.$store.state.countSlice.count--;
    },
  },
};
</script>

<template>
  <div class="ParentCountVuex">
    <p>Parent Count Vuex : {{ $store.state.countSlice.count }}</p>
    <button @click="addCount">addition</button>
    <button @click="subCount">subtract</button>
    <ChildCounterVuex />
  </div>
</template>
