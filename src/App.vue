<template>
  <main class="main">
    <h1>{{ title }}</h1>
    <ProductList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "./components/ProductsList.vue";

export default defineComponent({
  name: "App",
  components: { ProductList },
  data() {
    return {
      title: "Lista produktów",
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding-top: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    text-align: center;
  }
}
</style>
