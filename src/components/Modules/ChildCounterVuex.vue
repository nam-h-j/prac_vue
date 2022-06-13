<script>
export default {
  name: "ChildCounterVuex",
};
</script>

<template>
  <div>
    <h2>Child Count Vuex</h2>
    <p>{{ $store.state.countSlice.count }}</p>
  </div>
</template>
