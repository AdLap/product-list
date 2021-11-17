<template>
  <tr class="table__row" :class="{ checked: currProduct.checked }">
    <td>
      <input
        class="table__checkbox"
        type="checkbox"
        v-model="currProduct.checked"
      />
    </td>
    <th>{{ currProduct.name }}</th>
    <td>
      <select
        class="table__select"
        :class="{ disabled: !currProduct.checked }"
        v-model="currProduct.vatRate"
        :disabled="!currProduct.checked"
      >
        <option value="0">0%</option>
        <option value=".08">8%</option>
        <option value=".23">23%</option>
      </select>
    </td>
    <td>
      <input
        class="table__text__input"
        :class="{ disabled: !currProduct.checked }"
        type="number"
        v-model="currProduct.buyPrice"
        :disabled="!currProduct.checked"
      />
    </td>
    <td>
      <input
        class="table__text__input"
        :class="{ disabled: !currProduct.checked }"
        type="number"
        v-model="currProduct.sellPrice"
        :disabled="!currProduct.checked"
      />
    </td>
    <td>{{ currProduct.tradeMargin }}</td>
    <td>
      <button
        class="table__btn"
        :class="{ disabled: !currProduct.checked }"
        @click="saveData"
        :disabled="!currProduct.checked"
      >
        Zapisz
      </button>
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
      padding: 1em 0;

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
    background: transparent;

    &:hover {
      background: white;
    }
  }

  &__text__input {
    text-align: right;
    width: 125px;
    border: none;
    background: transparent;

    &:hover {
      border-bottom: 1px solid gray;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid grey;
    }
  }

  &__btn {
    padding: 0.2em 0.5em;
    cursor: pointer;
    background: transparent;
    border: 1px solid black;
    border-radius: 3px;

    &:hover {
      background: white;
    }

    &:active {
      background: transparent;
    }
  }
}

.checked {
  background: #ebebeb;
}

.disabled {
  border: none;
  cursor: default;

  &:hover {
    background: transparent;
    border: none;
  }
}
</style>