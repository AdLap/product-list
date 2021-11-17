<template>
  <h2 class="error">{{ errorMsg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorMsg",
  props: {
    errorMsg: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.error {
  color: red;
  text-align: center;
  white-space: pre-wrap;
}
</style>
