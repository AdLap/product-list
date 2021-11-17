<template>
  <main class="main">
    <section class="content">
      <table class="content__table">
        <ProductsHead
          @eventCheckAll="onEventCheckedAll"
          @eventSaveAll="onEventSaveAll"
        />
        <tbody class="content__table__body" v-if="products.length">
          <ProductItem
            v-for="product in products"
            :key="product.id"
            :product="product"
            @eventSaveData="onEventSaveData"
          />
        </tbody>
      </table>
      <div
        class="content__table__loading"
        v-if="!products.length && !savedProducts.length"
      >
        Czekam na dane...
      </div>
      <div
        class="content__table__loading"
        v-if="!products.length && savedProducts.length"
      >
        Wszystko wykupione
      </div>
      <Success :successMsg="successMsg" v-if="successMsg" />
      <ErrorMsg :errorMsg="errorMsg" v-if="errorMsg" />
    </section>
    <ProductSummary
      :savedProducts="savedProducts"
      @eventSendProducts="onEventSendProducts"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import Product from "@/types/types";
import fetchProducts from "../utility/db";
import ProductsHead from "./ProductsHead.vue";
import ProductItem from "./ProductItem.vue";
import ProductSummary from "./ProductsSummary.vue";
import Success from "../utility/Success.vue";
import ErrorMsg from "../utility/ErrorMsg.vue";

export default defineComponent({
  name: "ProductList",
  components: { ProductItem, ProductSummary, ProductsHead, Success, ErrorMsg },
  data() {
    const products = ref<Product[]>([]);
    const savedProducts = ref<Product[]>([]);
    let successMsg = "";
    let errorMsg = "";
    return { products, savedProducts, errorMsg, successMsg };
  },
  mounted() {
    fetchProducts()
      .then((data) => {
        this.products = data;
      })
      .catch((err) => (this.errorMsg = err.message));
  },
  methods: {
    onEventSaveData(id: number) {
      const idx = this.products.findIndex((product) => product.id === id);
      this.savedProducts.push(this.products[idx]);
      this.products.splice(idx, 1);
      this.errorMsg = "";
    },
    onEventSaveAll() {
      this.products.forEach((product) => this.savedProducts.push(product));
      this.products = [];
    },
    onEventCheckedAll(value: boolean) {
      this.products.forEach((product) => (product.checked = value));
    },
    onEventSendProducts() {
      axios
        .post("https://nieistniejący.adres.pl/v1/api", this.savedProducts, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((resp) => {
          if (resp.status === 200) {
            this.successMsg = "Produkty wysłane";
            this.savedProducts = [];
          }
        })
        .catch((error) => (this.errorMsg = error));
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: calc(100vh - 189px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}

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
    background: transparent;

    &__loading {
      text-align: center;
      width: 50%;
      margin: 2rem auto 0 auto;
    }
  }
}
</style>
