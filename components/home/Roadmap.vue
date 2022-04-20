<template>
  <div class="app-container">
    <h2 class="text-white text-3xl md:text-[42px] leading-tight font-bold md:text-center">
      Roadmap
    </h2>
    <div class="mt-12 relative py-px">
      <div class="roadmap-line"></div>
      <div class="roadmap-block" v-for="roadmapBlock in roadmap" :key="roadmapBlock.title">
        <span class="roadmap-block__circle"></span>
        <div class="text-lava-yellow text-lg font-semibold mb-2">
          {{ roadmapBlock.title }}
        </div>
        <div class="text-slate-200" v-for="bulletPoint in roadmapBlock.points" :key="bulletPoint">
          {{ bulletPoint }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const roadmap = [
  {
    title: 'March 2022',
    points: [
      'Whitepaper released',
      'dApp closed beta launched',
      'Partnerships negotiated',
      'Sister project concepts laid out'
    ]
  },
  {
    title: 'April 2022',
    points: ['Sister project development',
      'KYC + Contract Audit',
      'NFT & WL Presale + Public Launch',
      'CoinMarketCap + Coingecko Listing'
    ]
  },
  {
    title: 'May 2022',
    points: ['Project Athena V1 Release',
      'First Earnings/Sustainability Report Release',
      'True-ROI™ System Release',
      'In-house Marketplace Release'
    ]
  },
  {
    title: 'June 2022',
    points: [
      'Project Athena V2 Release',
      'Project Flora V1 Release',
      'Angel Investment Platform Release + Round 1 Investment',
      'Project Moneta Closed Beta'
    ]
  },
  {
    title: 'Q3 2022',
    points: [
      'Ecosystem fully functioning (Sister projects, angel investments, etc)',
      'Development of additional sister projects',
      'Performance report for Round 1 Angel Investments release'
    ]
  },

];

</script>

<style lang="scss">
.roadmap-line {
  @apply absolute left-0 md:left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-lava-red overflow-hidden;

  &::before {
    content: "";
    position: absolute;
    background: #fca803;
    box-shadow: 0 0 15px 5px #fca803;
    @apply absolute top-0 w-full h-4;
    animation: 50s linear 0s forwards infinite roadmapLineFlow;
  }
}

.roadmap-block {
  @apply relative w-full ml-auto pl-6 pr-0 my-12;
  @apply md:w-1/2;

  .roadmap-block__circle {
    top: 5px;
    @apply absolute left-0  w-4 h-4 border-2 border-lava-orange bg-lava-yellow rounded-full transform -translate-x-1/2;

    &::after {
      content: "";
      @apply absolute inset-0 opacity-0;
      box-shadow: 0 0 35px 12px #fd683b;
      animation: 3s ease-in-out 0s alternate infinite fadeIn;
    }
  }

  @for $i from 1 through 7 {
    &:nth-child(#{$i}) .roadmap-block__circle::after {
      animation-delay: #{$i * 0.7}s;
    }
  }

  &:nth-child(odd) {
    @apply md:pr-6 ml-0 md:pl-0 md:text-right;

    .roadmap-block__circle {
      @apply md:left-auto md:right-0 md:translate-x-1/2;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes roadmapLineFlow {
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(1500px);
  }
}

//@keyframes glow-bullet-point {
//  from {
//    box-shadow: 0 0 5px 0 #fca803;
//  }
//
//  to {
//    box-shadow: 0 0 35px 5px #fca803;
//  }
//}
</style>
