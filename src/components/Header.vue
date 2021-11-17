<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      title: "Lista aut",
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  text-align: center;
  padding: 3rem 0;
}
</style>