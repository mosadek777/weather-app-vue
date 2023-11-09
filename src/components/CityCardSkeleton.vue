<template>
  components: { AnimatedPlaceHolder }, components: { AnimatedPlaceHolder },
  <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md">
    <div class="flex flex-1 flex-col gap-2">
      <AnimatedPlaceHolder class="max-w-[50%]" />
      <AnimatedPlaceHolder class="max-w-[50%]" />
    </div>
    <div class="flex flex-col items-end flex-1 gap-2">
      <AnimatedPlaceHolder class="max-w-[50px] w-full" />
      <AnimatedPlaceHolder class="max-w-[75px] w-full" />
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceHolder from "./AnimatedPlaceHolder.vue";
</script>

