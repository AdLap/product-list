<template>
  <Header />
  <ProductList />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "./components/ProductsList.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: { ProductList, Footer, Header },
  data() {
    return {
      title: "Lista produktów",
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
