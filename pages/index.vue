<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="absolute inset-0 z-0 justify-end overflow-hidden pointer-events-none">
      <div class="relative app-container">
        <img
            class="absolute -right-[200px] top-[300px] w-[600px] md:top-[300px] lg:top-[70px] md:w-[1100px] max-w-none md:max-w-full"
            src="/imgs/vulcano.svg"
            v-if="!isWebmSupported">
        <video
            ref="videoElement"
            muted
            autoplay
            playsinline
            loop
            class="absolute -right-[150px] top-[300px] w-[600px] md:-right-[200px] md:top-[300px]  lg:-right-[350px] lg:top-[20px] md:w-[1350px] max-w-none md:max-w-full"
            src="/video/vulcano.webm?v3"
            v-else/>

        <img src="/imgs/rock.png" class="absolute top-20 md:top-40 -right-4 lg:-right-20 floating-1"/>
        <img src="/imgs/rock2.png"
             class="absolute top-60 -left-20 md:left-20 lg:top-80 lg:left-80 floating-1 delay-1"/>
        <img src="/imgs/rock21.png"
             class="absolute top-40 left-[50%] md:left-96 md:top-40 lg:top-60 lg:left-[700px] floating-1 delay-2"/>

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

    <HomeBoxPhases class="mt-[500px]"/>

    <div class="relative">
      <img src="/imgs/topo1.svg" width="1400" class="opacity-30 absolute -top-20 right-0 transform translate-x-1/2"/>

      <div class="app-container relative">
        <img src="/imgs/rock.png" class="absolute top-80 -left-5 xl:-left-24 floating-1"/>
        <img src="/imgs/rock2.png"
             class="absolute top-[520px] -right-40 floating-1 delay-1"/>
        <img src="/imgs/rock21.png"
             class="absolute top-[-100px] right-[10%] xl:top-0 xl:right-[20%]  floating-1 delay-2"/>
      </div>

      <HomeBoxFeatures class="relative mt-40 md:mt-60 lg:mt-80"/>
    </div>

    <HomeBoxAudits class="mt-40 md:mt-60 lg:mt-80"/>

    <div class="relative">
      <img src="/imgs/topo1.svg" width="1400" class="opacity-30 absolute top-10 left-0 transform -translate-x-1/2"/>

      <div class="app-container relative">
        <img src="/imgs/rock.png" class="absolute top-96 -right-8 xl:-right-40 floating-1"/>
        <img src="/imgs/rock2.png"
             class="absolute top-[720px] -left-5 xl:-left-24 delay-1 floating-1 "/>
        <img src="/imgs/rock21.png"
             class="absolute top-[-100px] left-[50%] md:left-[10%] xl:top-0 xl:left-[20%]  floating-1 delay-2"/>
      </div>

      <HomeRoadmap class="relative mt-40 md:mt-60 lg:mt-80"/>
    </div>

    <div class="relative">
      <img src="/imgs/topo2.svg" width="1400"
           class="opacity-30 absolute -top-20 right-40 transform translate-x-1/2 rotate-90"/>
      <HomeBoxFAQ class="relative mt-40 md:mt-60 lg:mt-80"/>
    </div>

    <div class="app-container relative z-10">
      <img src="/imgs/rock.png" class="absolute top-80 -left-5 xl:-left-24 floating-1"/>
      <img src="/imgs/rock2.png"
           class="absolute top-[520px] -right-40 floating-1 delay-1"/>
      <img src="/imgs/rock21.png"
           class="absolute top-[100px] right-[10%] xl:right-[20%]  floating-1 delay-2"/>
    </div>

    <HomeBoxNumbers class="relative z-10 mt-40 md:mt-60 lg:mt-80"/>

    <div class="relative">
      <img src="/imgs/topo1.svg" width="1400"
           class="opacity-30 absolute -top-60 left-0 transform -translate-x-1/3 -rotate-90"/>
      <HomeBoxTeam class="relative mt-40 md:mt-60 lg:mt-80"/>
    </div>
    <div class="py-40"></div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { useRuntimeConfig } from '#app';
import { onMounted } from '@vue/runtime-core';

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

declare const Modernizr: any;
const isWebmSupported = ref(process.client && Modernizr.video && Modernizr.video.webm);
onMounted(() => {
  isWebmSupported.value = Modernizr.video && Modernizr.video.webm;
});

</script>
