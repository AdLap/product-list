<template>
  <tr>
    <td>
      <input type="checkbox" v-model="currProduct.checked" />
    </td>
    <td>{{ currProduct.name }}</td>
    <td>
      <select v-model="currProduct.vatRate">
        <option value="0">0%</option>
        <option value=".08">8%</option>
        <option value=".23">23%</option>
      </select>
    </td>
    <td>
      <input v-model="currProduct.buyPrice" />
    </td>
    <td>
      <input v-model="currProduct.sellPrice" />
    </td>
    <td>{{ currProduct.tradeMargin }}</td>
    <td>
      <button @click="saveData">Zapisz</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/types/types";

const calculateMargin = (sellPrice: number, vatRate: number, buyPrice: number): number => {
    const tradeMargin: number = ((sellPrice / (1 + vatRate) - buyPrice) /
        (sellPrice / (1 + vatRate)) * 100)
    return Number(tradeMargin.toFixed(2))
};

export default defineComponent({
  name: "ProductItem",
  props: {
    product: {
      required: true,
      type: Object as () => Product,
    },
  },
  data() {
    return {
      currProduct: this.product,
    };
  },
  updated() {
    this.currProduct.tradeMargin = calculateMargin(
      this.currProduct.sellPrice,
      this.currProduct.vatRate,
      this.currProduct.buyPrice
    );
  },
  methods: {
    saveData() {
      console.log("from item", this.product);
      this.$emit("eventSaveData", this.product.id);
    },
  },
});
</script>
