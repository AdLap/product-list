<template>
  <div>
    <table v-if="products.length">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @eventSaveData="onEventSaveData"
      />
    </table>
    <h2 v-else>Czekam na dane...</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Product from "@/types/types";
import fetchProducts from "../utility/db";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  name: "ProductList",
  components: { ProductItem },
  setup() {
    const products = ref<Product[]>([]);
    return { products };
  },
  mounted() {
    fetchProducts()
      .then((data) => {
        this.products = data;
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    onEventSaveData(product: unknown) {
      console.log("odebrano z item:", product);
      // const idx = this.products.findIndex((product) => product.id === id);
      // console.log(this.products[idx]);
    },
  },
});
</script>

<style lang="sass" scoped>
</style>
