<template>
  <h1>{{ title }}</h1>
  <ProductList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from './components/ProductsList.vue'

export default defineComponent({
  name: "App",
  components: {ProductList},
  data() {
    return {
      title: "Lista produktów",
    };
  },
});
</script>

<style lang="scss">
</style>
