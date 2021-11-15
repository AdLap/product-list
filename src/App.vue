<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      title: "Lista produktów",
    };
  },
});
</script>

<style lang="scss">
</style>
