<template>
  <div class="relative">
    <div class="app-container">
      <!--      <h2 class="text-base font-semibold uppercase tracking-wider text-indigo-600">Deploy faster</h2>-->
      <h2 class="text-white text-3xl md:text-[42px] leading-tight font-bold max-w-lg md:max-w-2xl">
        Revolutionary features geared&nbsp;towards sustainability
      </h2>
      <p class="mt-5 text-xl text-lava-yellow">
        Our innovative solutions to unlock the true potential of our protocol
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div
                class="flow-root bg-lava-dark-blue rounded-4 border border-lava-yellow glow-shadow-red px-6 pb-8 h-full">
              <div class="-mt-6 text-center">
                <div>
                  <span class="inline-flex items-center justify-center rounded-xl bg-lava-yellow p-2 shadow-lg ">
                    <component :is="feature.icon" class="h-9 w-9 text-white" aria-hidden="true"/>
                  </span>
                </div>
                <h3 class="mt-8 text-2xl font-semibold text-lava-yellow">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-slate-200 leading-7">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  BriefcaseIcon, CashIcon,
  CubeTransparentIcon,
  PhotographIcon,
  ServerIcon,
  UserGroupIcon
} from '@heroicons/vue/outline';

const features = [
  {
    name: 'Node Minting',
    description: 'Mint a node with multiple assets such as USDC.e, wETH, wBTC, or native LAVA. Users can also utilize our Fusion NFT to permanently upgrade their existing nodes',
    icon: ServerIcon
  },
  {
    name: 'Flexible Nodes',
    description: 'Allows users of all wallet sizes to participate in our protocol, removing the need for a large initial investment. Our flex nodes provide a direct upgrade path to a full node.',
    icon: CubeTransparentIcon
  },
  {
    name: 'Umbrella Company',
    description: 'Conducting ourselves as an umbrella company allows us to develop multiple in-house projects, which each provide their own revenue streams.',
    icon: BriefcaseIcon
  },
  {
    name: 'In-House NFT Marketplace',
    description: 'Buy and sell Fusion, Wallet Booster NFTs, and eventually your nodes directly on our platform using LAVA as the currency.',
    icon: PhotographIcon
  },
  {
    name: 'Peer-to-Peer OTC',
    description: 'Custom built Discord bot for matching up buyers and sellers. Users will be able to benefit from this system by avoiding price impact.',
    icon: UserGroupIcon
  },
  {
    name: 'True-ROI™',
    description: 'A ROI tracking system that will be enabled post launch. This innovative rewards mechanism will be a groundbreaking method of managing emissions.',
    icon: CashIcon
  }
];

</script>
