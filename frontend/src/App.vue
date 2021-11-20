<template>
<div class="w-full flex flex-col items-center pt-14">
    <Clock></Clock>
</div>
</template>

<script lang="ts">
import Clock from "./components/Clock.vue";

export default {
  name: "App",
  components: {
      Clock
  }
};
</script>

<style></style>