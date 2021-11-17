<template>
  <h2 class="success">{{ successMsg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Success",
  props: {
    successMsg: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.success {
  color: green;
  text-align: center;
}
</style>
