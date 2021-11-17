<template>
  <thead class="table__head">
    <tr>
      <th>
        <input
          class="table__head__checkbox"
          type="checkbox"
          v-model="checked"
        />
      </th>
      <th>{{ title }}</th>
      <th>{{ vatRate }}</th>
      <th>{{ buyPrice }}</th>
      <th>{{ sellPrice }}</th>
      <th>{{ tradeMargin }}</th>
    </tr>
    <button
      class="table__head__btn"
      :class="{ disabled: !checked }"
      :disabled="!checked"
      @click="saveAll"
    >
      Zapisz<br />wszystko
    </button>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsHead",
  data() {
    return {
      checked: false,
      title: "Nazwa",
      vatRate: "VAT",
      buyPrice: "Cena zakupu",
      sellPrice: "Cena sprzedaży",
      tradeMargin: "Marża",
    };
  },
  updated() {
    this.checkedAll();
  },
  methods: {
    checkedAll() {
      this.$emit("eventCheckAll", this.checked);
    },
    saveAll() {
      this.$emit("eventSaveAll");
      this.checked = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.table__head {
  position: relative;

  &__checkbox {
    width: 30px;
    cursor: pointer;
  }

  th {
    padding-bottom: 0.7em;
    max-width: 150px;
  }

  &__btn {
    padding: 0.2em 0.5em;
    cursor: pointer;
    background: transparent;
    border: 1px solid black;
    border-radius: 3px;
    position: absolute;
    right: -70px;
    top: 43px;

    &:hover {
      background: #ebebee;
    }

    &:active {
      background: white;
    }
  }
}

.disabled {
  border: none;
  cursor: default;
  opacity: 0;

  &:hover {
    background: transparent;
    border: none;
  }
}
</style>