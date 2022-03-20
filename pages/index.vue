<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 z-0 justify-end overflow-hidden">
      <div class="relative app-container">
        <img class="absolute -right-[200px] top-[300px] w-[600px] md:top-[300px] lg:top-[70px] md:w-[1100px] max-w-none md:max-w-full" src="/imgs/vulcano.svg">
      </div>
    </div>

    <div class="app-container pt-10 md:pt-20 relative">
      <IconsLavaLogo class="ml-3.5 mb-4 w-24 h-24"/>
      <h1 class="text-white text-4xl md:text-6xl font-bold">Lava Financial</h1>
      <h2 class="mt-8 md:mt-12 text-lava-red text-2xl md:text-[42px] leading-tight font-semibold max-w-xs md:max-w-lg">Welcome to the most explosive place in DeFi.</h2>
      <p class="mt-4 md:mt-6 text-lava-red md:text-xl">Website & Launch coming soon</p>

      <div class="mt-8 md:mt-12 flex items-start flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
        <BaseButton target="_blank" href="/lava_whitepaper.pdf" type="primary" size="big">Whitepaper</BaseButton>
        <BaseButton target="_blank" href="https://discord.gg/lavafinancial" type="primary" size="big">Join Discord</BaseButton>
      </div>
    </div>
  </div>
</template>
