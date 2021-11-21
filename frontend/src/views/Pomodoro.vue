<template>
  <div class="w-full flex flex-col items-center pt-14">
    <Clock></Clock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clock from "../components/Clock.vue";

export default defineComponent({
  name: "Pomodoro",
  components: {
    Clock,
  },
});
</script>

<style></style>
