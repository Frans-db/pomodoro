<template>
  <ul>
    <li v-for="pomodoro in pomodoros" :key="pomodoro._id">
      {{ pomodoro.duration }} | {{ pomodoro._id }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Pomodoro from "../models/Pomodoro";

export default defineComponent({
  name: "Overview",
  data() {
    return {
      pomodoros: [] as Pomodoro[],
    };
  },
  methods: {
    async fetchPomodoros() {
      const res = await fetch("api/pomodoros");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = <Pomodoro[]>await this.fetchPomodoros();
    this.pomodoros = data;
    console.log(data);
  },
});
</script>
