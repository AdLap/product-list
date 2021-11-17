<template>
  <footer>
    <div>
      <a :href="link" title="AdLap" target="_blank" referer="noreferer">{{
        name
      }}</a>
      <span> &copy; {{ date }}</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      name: "< AdLap />",
      link: "https://adlap-9b9e8.web.app/",
      date: "2021",
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  border-top: 0.75px solid #e0e0e0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #b6b6b6;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
</style>