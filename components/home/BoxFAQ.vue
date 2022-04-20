<template>
  <div class="app-container">
    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <h2 class="text-white text-3xl md:text-[42px] leading-tight font-bold lg:max-w-xs">
          Frequently asked questions
        </h2>
        <p class="mt-8 text-lg text-slate-200 lg:mr-20">
          Can’t find the answer you’re looking for? Reach out to our <a
            href="mailto:support@lava.financial" class="font-medium text-lava-yellow hover:underline">user support</a>
          team.
        </p>
      </div>
      <div class="mt-12 lg:mt-2 lg:col-span-2">
        <dl class="space-y-16">
          <div v-for="faq in faqs" :key="faq.question">
            <dt class="text-xl leading-6 font-medium text-lava-yellow">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base text-slate-200 leading-7">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const faqs = [
  {
    question: 'What will the treasury be investing in?',
    answer:
        'In-house sister companies, safe yield farming strategies, stablecoin looping, bluechip coin staking, angel investments, & a small high-risk portfolio.'
  },
  {
    question: 'How can I trust this project?',
    answer:
        'Publicly doxed core team members & KYC, audited contracts, a 5 person multi-sig wallet for all project transactions - a security first approach.'
  },
  {
    question: 'What makes you different from other projects?',
    answer:
        'We intend to truly solve the sustainability problem that is core to all node protocols. With our innovative mechanisms fully in place, working as intended, we will be the first project that attains true self sustainability.'
  },
  {
    question: 'Upcoming features?',
    answer:
        'NFT Marketplace for our nodes, Fusion NFTs and more. Node health system using True-ROI™'
  },
  {
    question: 'How does governance work?',
    answer:
        'A portion of our treasury investments, as well as significant protocol decisions, will be put to a community vote. Members will be able to vote using our gLAVA token, where the voting weight is determined by users’ stake in the protocol.'
  }
];
</script>
