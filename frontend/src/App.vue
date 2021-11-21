<template>
  <div class="w-full flex justify-center space-x-16 text-sm text-gray-800 mt-2">
    <router-link to="/">Pomodoro</router-link>
    <span>|</span>
    <router-link to="/overview">Overview</router-link>
    <span>|</span>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style></style>
