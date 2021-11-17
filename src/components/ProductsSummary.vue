<template>
  <div class="summary">
    <table>
      <thead>
        <tr>
          <th colspan="5">Podsumowanie</th>
        </tr>
        <tr>
          <th>Nazwa</th>
          <th>VAT</th>
          <th>Cena zakupu</th>
          <th>Cena sprzedaży</th>
          <th>Marża</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th>{{ product.name }}</th>
          <td>{{ product.vatRate * 100 }}%</td>
          <td>{{ product.buyPrice }}</td>
          <td>{{ product.sellPrice }}</td>
          <td>{{ product.tradeMargin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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

<style lang="scss" scoped>
.summary {
  align-self: flex-start;
  margin: 5rem auto auto 3rem;

  th,
  td {
    padding: 0 10px;
  }

  th {
    text-align: left;
  }

  td {
    text-align: right;
  }
}
</style>
