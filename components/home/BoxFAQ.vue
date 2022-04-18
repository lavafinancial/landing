<template>
  <div class="">
    <div class="app-container py-16 lg:py-20">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 class="text-3xl font-extrabold">Frequently asked questions</h2>
<!--          <p class="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>-->
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-12">
            <div v-for="faq in faqs" :key="faq.question">
              <dt class="text-lg leading-6 font-medium text-lava-yellow">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base text-slate-300">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const faqs = [
  {
    question: 'What will the treasury be investing in?',
    answer:
        'Sister Projects, DeFi wizard managed portfolio investment, Angel investment in innovative projects, stablecoin/bluechip strategies, and safe yield farming.',
  },
  {
    question: 'How can I trust this project?',
    answer:
        'KYC with Public Core Team members, Audited contracts, multisig wallets for all project finances, sustainability-first approach.'
  },
  {
    question: 'What makes you different from other projects?',
    answer:
        'We intend to truly solve the sustainability problem that is core to all node projects. With our innovative mechanisms fully in place and working as intended, we aim to be the first project that attains true sustainability.'
  },
  {
    question: 'Upcoming features?',
    answer:
        'Gamification using nodes that provides real rewards to users, in-dApp store, ecosystem integration with sister projects.'
  },
  {
    question: 'How does governance work?',
    answer:
        'We will set aside a portion of our investment treasury for community driven strategies. Shortlisted strategies will be presented to the users for voting (using gLava) and decisions made by users will be executed without delays.'
  }
];
</script>
