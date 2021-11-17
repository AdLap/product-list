<template>
  <section class="content">
    <table class="content__table">
      <ProductsHead @eventCheckAll="onEventCheckedAll" />
      <tbody class="content__table__body" v-if="products.length">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          @eventSaveData="onEventSaveData"
        />
      </tbody>
    </table>
    <div class="content__table__loading" v-if="!products.length">
      Czekam na dane...
    </div>
  </section>
  <ProductSummary :savedProducts="savedProducts" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Product from "@/types/types";
import fetchProducts from "../utility/db";
import ProductsHead from "./ProductsHead.vue";
import ProductItem from "./ProductItem.vue";
import ProductSummary from "./ProductsSummary.vue";

export default defineComponent({
  name: "ProductList",
  components: { ProductItem, ProductSummary, ProductsHead },
  data() {
    const products = ref<Product[]>([]);
    const savedProducts = ref<Product[]>([]);
    return { products, savedProducts };
  },
  mounted() {
    fetchProducts()
      .then((data) => {
        this.products = data;
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    onEventSaveData(id: number) {
      const idx = this.products.findIndex((product) => product.id === id);
      this.savedProducts.push(this.products[idx]);
      this.products.splice(idx, 1);

      console.log("odebrano:", this.products[idx]);
      console.log("products-state:", this.products);
    },
    onEventCheckedAll(value: boolean) {
      console.log("odebrano event checked all");
      this.products.forEach((product) => (product.checked = value));
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  width: 100vw;
  min-height: 285px;
  padding: 2rem;

  &__table {
    margin: auto;
    width: 80%;
    max-width: 800px;
    line-height: 2em;
    text-align: left;
    border-collapse: collapse;

    &__loading {
      text-align: center;
      width: 50%;
      margin: 2rem auto 0 auto;
    }
  }
}
</style>
