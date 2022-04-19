<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="absolute inset-0 z-0 justify-end overflow-hidden pointer-events-none">
      <div class="relative app-container">
        <img
            class="absolute -right-[200px] top-[300px] w-[600px] md:top-[300px] lg:top-[70px] md:w-[1100px] max-w-none md:max-w-full"
            src="/imgs/vulcano.svg">
      </div>
    </div>

    <div class="app-container pt-10 md:pt-20 relative">
      <IconsLavaLogo class="ml-3.5 mb-4 w-24 h-24"/>
      <h1 class="text-white text-5xl md:text-6xl font-bold">Lava Financial</h1>
      <h2 class="mt-20 md:mt-24 text-white text-3xl md:text-[42px] leading-tight font-bold max-w-xs md:max-w-lg">
        Welcome to the most explosive place in DeFi.
      </h2>

      <div
          class="mt-8 md:mt-12 flex items-start flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
        <BaseButton target="_blank" href="/lava_whitepaper.pdf" type="primary" size="big">Whitepaper</BaseButton>
        <BaseButton target="_blank" href="https://discord.gg/lavafinancial" type="primary" size="big">Join Discord
        </BaseButton>
      </div>
    </div>

    <HomeBoxPhases class="mt-96"/>
    <div class="relative">
      <img src="/imgs/topo1.svg" width="1400" class="opacity-30 absolute -top-20 right-0 transform translate-x-1/2"/>
      <HomeBoxFeatures class="relative mt-80"/>
    </div>
    <div class="relative">
      <img src="/imgs/topo1.svg" width="1400" class="opacity-30 absolute -top-60 left-0 transform -translate-x-1/2"/>
      <HomeBoxFAQ class="relative mt-80"/>
    </div>
    <HomeBoxNumbers class="mt-80"/>

    <div class="relative">
      <img src="/imgs/topo2.svg" width="1400" class="opacity-30 absolute -top-60 right-0 transform translate-x-1/3"/>
      <HomeBoxTeam class="relative mt-80"/>
    </div>
    <div class="py-40"></div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();

const title = 'Lava Financial';
const description = 'Welcome to the most explosive place in DeFi.';
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:image',
      content: config.BASE_URL + '/imgs/og_default_image.jpg'
    }
  ]
});


</script>
