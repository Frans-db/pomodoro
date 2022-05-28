<template>
  <div class="flex flex-col items-center">
    <div class="rounded-lg shadow border-b">
      <table class="divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="title in titles"
              :key="title"
              class="
                px-6
                py-3
                text-xs text-left
                font-medium
                tracking-wider
                text-gray-500
                uppercase
              "
            >
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="pomodoro in pomodoros" :key="pomodoro._id">
            <td>{{ pomodoro.startTime }}</td>
            <td>{{ pomodoro.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Pomodoro from "../models/Pomodoro";

export default defineComponent({
  name: "Overview",
  data() {
    return {
      pomodoros: [] as Pomodoro[],
      titles: ["Start Time", "Duration"],
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
