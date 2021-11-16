<template>
  <tr>
    <td>
      <input type="checkbox" />
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
      <input v-model="currProduct.buyPrice"/>
    </td>
    <td>
      <input v-model="currProduct.sellPrice" />
    </td>
    <td>
      {{
        (
          ((product.sellPrice / (1 + product.vatRate) - product.buyPrice) /
            (product.sellPrice / (1 + product.vatRate))) *
          100
        ).toFixed(2)
      }}
    </td>
    <td>
      <button @click="saveData">Zapisz</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/types/types";

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
      currProduct: this.product
    }
  },
  methods: {
    saveData() {
      console.log('from item', this.product);
      this.$emit('eventSaveData', this.product);
    }
  }
});
</script>
