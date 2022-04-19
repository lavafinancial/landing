<template>
  <div class="app-container text-center">
<!--    <h3 class="text-lg leading-6 font-medium">Last 30 days</h3>-->
    <dl class="mt-5 grid grid-cols-1 rounded-lg bg-lava-orange/20 overflow-hidden shadow divide-y divide-lava-orange/20 md:grid-cols-3 md:divide-y-0 md:divide-x">
      <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
        <dt class="text-base font-normal text-lava-yellow">
          {{ item.name }}
        </dt>
        <dd class="mt-2 text-4xl font-semibold">
<!--          <div class="items-baseline text-4xl font-semibold">-->
            {{ item.stat }}
<!--            <span class="ml-2 text-sm font-medium text-gray-500"> from {{ item.previousStat }} </span>-->
<!--          </div>-->

<!--          <div :class="[item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">-->
<!--            <ArrowSmUpIcon v-if="item.changeType === 'increase'" class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />-->
<!--            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />-->
<!--            <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>-->
<!--            {{ item.change }}-->
<!--          </div>-->
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'

const stats = [
  { name: 'Initial Price', stat: '$0.60', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: '24HR Volume', stat: '---', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Market Cap', stat: '$6.0M', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]
</script>
