<script>
// App.vue(Parent)
import ChildCounter from "./ChildCounter.vue";
import "./ParentCount.scss";

export default {
  name: "ParentCounter",
  components: {
    ChildCounter,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // 이벤트 추가
    addCount() {
      this.count++;
    },
    subCount() {
      this.count--;
    },
  },
};
</script>

<template>
  <div class="ParentCount">
    <p>Parent Count : {{ count }}</p>
    <button @click="addCount">addition</button>
    <button @click="subCount">subtract</button>
    <ChildCounter v-bind:parentCount="count"></ChildCounter>
  </div>
</template>
