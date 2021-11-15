<template>
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>{{product.name}}</td>
    <td>
      <select>
        <option>0%</option>
        <option>8%</option>
        <option>23%</option>
      </select>
    </td>
    <td>
      <input type="text" />
    </td>
    <td>
      <input type="text" />
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
        <button>Zapisz</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/types/Product";


export default defineComponent({
  name: "ProductItem",
  props: {
    product: {
      required: true,
      type: Object as () => Product,
    },
  },
});
</script>
