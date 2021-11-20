<template>
  <div class="w-80 h-80 sm:w-96 sm:h-96 bg-gray-50 rounded-full shadow-md p-4">
    <div class="w-full h-full rounded-full bg-red-300 p-2.5">
      <div
        class="
          w-full
          h-full
          rounded-full
          bg-gray-50
          flex flex-col
          items-center
          justify-center
        "
      >
        <!-- <input type="time" value="15:00" class="appearance-none bg-gray-50 p-0 text-7xl md:text-7.5xl font-black text-gray-700 font-mono"> -->
        <div class="text-7xl md:text-7.5xl font-black text-gray-700 font-mono">
          <input
            @change="onMinutesChange()"
            type="number"
            min="0"
            max="60"
            v-model.number="minutes"
            class="w-[5.6rem] md:w-[6.7rem] bg-gray-50 font-black appearance-none"
            id=""
          />
          <span>:</span>
          <input
            @change="onSecondsChange()"
            type="number"
            min="0"
            max="60"
            value="00"
            class="w-[5.6rem] md:w-[6.7rem] bg-gray-50 font-black appearance-none"
            id=""
          />
        </div>
      </div>
    </div>
  </div>

  <a
    @click="logValues()"
    class="
      mt-12
      px-10
      shadow-xl
      py-4
      md:py-3
      bg-gray-50
      text-gray-900
      rounded-3xl
      text-3xl
      md:text-2xl
      font-bold
      tracking-wide
    "
  >
    Start
  </a>
</template>

<script lang="ts">
export default {
  name: "Clock",
  data() {
    return {
      minutes: 15,
      seconds: 0,
    };
  },
  methods: {
    logValues() {
      console.log(this.minutes, this.seconds);
    },
    onMinutesChange() {
      if (this.minutes < 0) {
        this.minutes = 0;
      }
      if (this.minutes > 59) {
        this.minutes = 59;
      }
    },
    onSecondsChange() {
      if (this.seconds < 0) {
        this.seconds = 0;
      }
      if (this.seconds > 59) {
        this.seconds = 59;
      }
    },
  },
};
</script>
