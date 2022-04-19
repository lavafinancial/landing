<template>
  <div class="app-container relative">
    <h2 class="text-white text-3xl md:text-[42px] leading-tight font-bold max-w-xs md:max-w-lg">
      The new node protocol&nbsp;standard
    </h2>

    <div class="mt-10 md:mt-14 p-6 md:p-10 relative bg-lava-dark-blue rounded-4 border border-lava-yellow glow-shadow-yellow">
        <dl class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
          <div v-for="feature in features" :key="feature.name">
            <dt>
<!--              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-lava-red text-white">-->
<!--                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true"/>-->
<!--              </div>-->
              <p class="text-2xl md:text-3xl leading-tight font-medium text-lava-yellow">{{ feature.name }}</p>
            </dt>
            <dd class="mt-4 lg:mt-6 text-base leading-7 text-slate-200">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
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
    name: 'Complete Self Sustainability',
    description:
        'The protocol will at this point be able to support near 100% nLAVA payouts and will be fully self-sustainable with income generated via sister projects, treasury farming, healthy taxes, angel investments and royalties.',
    icon: LightningBoltIcon
  }
];
</script>
