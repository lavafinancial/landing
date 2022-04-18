<template>
  <div class="app-container relative">
    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-center">
      The new node protocol standard
    </h2>
    <div class="mt-6 py-12 relative">
      <div class="">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-lava-red text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true"/>
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-lava-yellow">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 text-base text-slate-300">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline';

const features = [
  {
    name: 'Treasury Growth via $LAVA Token',
    description:
        'The funds generated will be put to work generating a yield for the treasury and node holders. In the time leading up to the transition to Phase 2, the team will be utilizing numerous investment strategies and begin to build out sister companies.',
    icon: GlobeAltIcon
  },
  {
    name: 'Revenue Share Model with $nLAVA',
    description:
        'Users can claim a percentage of their rewards in $nLAVA tokens, which are redeemable for a portion of the treasury’s return on investments. Node payouts in $nLAVA will begin small, but as the treasury grows so will the percentage of $nLAVA paid out.',
    icon: ScaleIcon
  },
  {
    name: 'Phase 3: Complete Self Sustainability',
    description:
        'The protocol will at this point be able to support near 100% nLAVA payouts and will be fully self-sustainable with income generated via sister projects, treasury farming, healthy taxes, angel investments and royalties.',
    icon: LightningBoltIcon
  }
];
</script>
