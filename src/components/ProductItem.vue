<template>
  <tr class="table__row">
    <td>
      <input
        class="table__checkbox"
        type="checkbox"
        v-model="currProduct.checked"
      />
    </td>
    <th>{{ currProduct.name }}</th>
    <td>
      <select class="table__select" v-model="currProduct.vatRate">
        <option value="0">0%</option>
        <option value=".08">8%</option>
        <option value=".23">23%</option>
      </select>
    </td>
    <td>
      <input class="table__text__input" v-model="currProduct.buyPrice" />
    </td>
    <td>
      <input class="table__text__input" v-model="currProduct.sellPrice" />
    </td>
    <td>{{ currProduct.tradeMargin }}</td>
    <td>
      <button class="table__btn" @click="saveData">Zapisz</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/types/types";

const calculateMargin = (
  sellPrice: number,
  vatRate: number,
  buyPrice: number
): number => {
  const tradeMargin: number =
    ((sellPrice / (1 + vatRate) - buyPrice) / (sellPrice / (1 + vatRate))) *
    100;
  return Number(tradeMargin.toFixed(2));
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

<style lang="scss" scoped>
.table {
  &__row {
    td {
      max-width: 150px;

      &:nth-last-of-type(2) {
        text-align: right;
        width: 50px;
      }

      &:last-of-type {
        text-align: center;
      }
    }
  }

  &__checkbox {
    width: 30px;
    cursor: pointer;
  }

  &__select {
    cursor: pointer;
  }

  &__text__input {
    text-align: right;
    width: 125px;
    border: none;

    &:focus {
      outline: none;
      border-bottom: 1px solid grey;
    }
  }

  &__btn {
    padding: 0.2em 0.5em;
    cursor: pointer;
  }
}
</style>