<template>
  <div>
    <table v-if="products.length">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </table>
    <h2 v-else>Czekam na dane...</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Product from "@/types/Product";
import getProduct from "../utility/db";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  name: "ProductList",
  components: { ProductItem },
  setup() {
    const products = ref<Product[]>([]);
    return { products };
  },
  mounted() {
    getProduct()
      .then((data) => {
        this.products = data;
      })
      .catch((err) => console.log(err.message));
  },
});
</script>

<style lang="sass" scoped>
</style>