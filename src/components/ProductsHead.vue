<template>
  <thead class="table__head">
    <tr>
      <th>
        <input
          class="table__head__checkbox"
          type="checkbox"
          @click="checkedAll"
        />
      </th>
      <th>{{ title }}</th>
      <th>{{ vatRate }}</th>
      <th>{{ buyPrice }}</th>
      <th>{{ sellPrice }}</th>
      <th>{{ tradeMargin }}</th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsHead",
  data() {
    return {
      title: "Nazwa",
      vatRate: "VAT",
      buyPrice: "Cena zakupu",
      sellPrice: "Cena sprzedaży",
      tradeMargin: "Marża",
    };
  },
  methods: {
    checkedAll() {
      console.log("click checked all");
      this.$emit("eventCheckedAll", true);
    },
  },
});
</script>

<style lang="scss" scoped>
.table__head {
  &__checkbox {
    width: 30px;
    cursor: pointer;
  }

  th {
    padding-bottom: 0.7em;
    max-width: 150px;
  }
}
</style>