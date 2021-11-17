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
        <tr v-for="product in savedProducts" :key="product.id">
          <th>{{ product.name }}</th>
          <td>{{ product.vatRate * 100 }}%</td>
          <td>{{ product.buyPrice }}</td>
          <td>{{ product.sellPrice }}</td>
          <td>{{ product.tradeMargin }}%</td>
        </tr>
      </tbody>
    </table>
    <button
      class="summary__btn"
      :class="{ hidden: !this.savedProducts.length }"
      :disabled="!this.savedProducts.length"
      @click="sendProducts"
    >
      Wyślij
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Product from "@/types/types";

export default defineComponent({
  name: "ProductSummary",
  props: {
    savedProducts: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
  methods: {
    sendProducts() {
      this.$emit("eventSendProducts");
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

  &__btn {
    padding: 0.5em 1em;
    border-radius: 3px;
    border: 1px solid grey;
    background: transparent;
    cursor: pointer;
    margin: 30px 0 0 10px;

    &:hover {
      background: #ebebeb;
    }

    &:active {
      background: transparent;
    }
  }

  .hidden {
    opacity: 0;
    cursor: default;
  }
}
</style>
