<template>
  <table>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.vatRate * 100 }}%</td>
      <td>{{ product.buyPrice }}</td>
      <td>{{ product.sellPrice }}</td>
      <td>{{ product.tradeMargin }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Product from "@/types/types";

export default defineComponent({
  name: "ProductSummary",
  props: {
    products: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
});
</script>

<style lang="sass" scoped>
</style>
