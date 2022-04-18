<template>
  <div class="fixed z-50 top-0 left-0 right-0 text-white/80 py-3 sm:py-4 bg-[#1c0e3d]">
    <div class="app-container flex items-center justify-between sm:justify-end">
      <div class="flex items-center space-x-0">
        <a href="https://discord.gg/lavafinancial" target="_blank"
           class="flex p-2 hover:text-lava-orange transition duration-200 ease-in-out">
          <IconsIDiscord class="w-6 h-6 sm:w-7 sm:h-7"/>
        </a>
        <a href="https://twitter.com/Lavanodes" target="_blank"
           class="flex p-2 hover:text-lava-orange transition duration-200 ease-in-out">
          <IconsITwitter class="w-6 h-6 sm:w-7 sm:h-7"/>
        </a>
        <a href="https://t.me/lavafinancial" target="_blank"
           class="flex p-2 hover:text-lava-orange transition duration-200 ease-in-out">
          <IconsITelegram class="w-6 h-6 sm:w-7 sm:h-7"/>
        </a>
        <a href="https://www.youtube.com/channel/UChJXWec_UANBdg3aDtStUxQ" target="_blank"
           class="flex p-2 hover:text-lava-orange transition duration-200 ease-in-out">
          <IconsIYouTube class="w-6 h-6 sm:w-7 sm:h-7"/>
        </a>
        <a href="https://lavafinancial.medium.com" target="_blank"
           class="flex p-2 hover:text-lava-orange transition duration-200 ease-in-out">
          <IconsIMedium class="w-6 h-6 sm:w-7 sm:h-7"/>
        </a>
      </div>
      <a href="#" class="flex p-2 hover:text-lava-orange transition duration-200 ease-in-out ml-8"
         @mouseenter="switchTextTo('Coming Soon')"
         @mouseleave="switchTextTo('Launch App')"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const buttonText = ref('Launch App');

const switchTextTo = (newText: string) => {
  buttonText.value = newText;
};
</script>
