<script>
export default {
  name: "ChildCounter",
  props: ["parentCount"],
};
</script>

<template>
  <div>
    <h2>Child Count</h2>
    <p>{{ parentCount }}</p>
  </div>
</template>
