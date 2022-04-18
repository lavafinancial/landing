<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="app-container text-center">
<!--      <h2 class="text-base font-semibold uppercase tracking-wider text-indigo-600">Deploy faster</h2>-->
      <p class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Revolutionary features geared towards sustainability
      </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-lava-red">
        Our innovative solutions to unlock the true potential of our protocol
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-lava-orange/20 px-6 pb-8 h-full">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-lava-red p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-lava-yellow">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-slate-300">{{ feature.description }}</p>
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
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Node Minting',
    description: 'Mint a node with multiple assets such as USDC.e, wETH, wBTC, or native LAVA. Users can also utilize our Fusion NFT to permanently upgrade their existing nodes',
    icon: CloudUploadIcon,
  },
  {
    name: 'Flexible Nodes',
    description: 'Allows users of all wallet sizes to participate in our protocol, removing the need for a large initial investment. Our flex nodes provide a direct upgrade path to a full node.',
    icon: LockClosedIcon,
  },
  {
    name: 'Umbrella Company',
    description: 'Conducting ourselves as an umbrella company allows us to develop multiple in-house projects, which each provide their own revenue streams.',
    icon: RefreshIcon,
  },
  {
    name: 'In-House NFT Marketplace',
    description: 'Buy and sell Fusion and Wallet Booster NFTs directly on our platform using LAVA as the currency.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Peer-to-Peer OTC',
    description: 'Custom built Discord bot for matching up buyers and sellers. Users will be able to benefit from this system by avoiding price impact as well as receiving a 1% discount to market value.',
    icon: CogIcon,
  },
  {
    name: 'True-ROI™',
    description: 'A ROI tracking system that will be enabled post launch. We are extremely excited about this innovative rewards mechanism and we believe it will be a groundbreaking method of managing emissions',
    icon: ServerIcon,
  },
]

</script>
