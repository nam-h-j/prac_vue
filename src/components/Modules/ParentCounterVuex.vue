<script>
// App.vue(Parent)
import ChildCounter from "./ChildCounter.vue";
import "./ParentCountVuex.scss";

export default {
  name: "ParentCountVuex",
  components: {
    ChildCounter,
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
    <p>Parent Count : {{ $store.state.countSlice.count }}</p>
    <button @click="addCount">addition</button>
    <button @click="subCount">subtract</button>
    <ChildCounter
      v-bind:parentCount="$store.state.countSlice.count"
    ></ChildCounter>
  </div>
</template>
