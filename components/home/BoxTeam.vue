<template>
  <div class="">
    <div class="app-container py-12 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
<!--          <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>-->
        </div>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img class="object-cover shadow-lg rounded-lg w-full" :src="person.imageUrl" alt="" />

              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3 class="flex justify-between">
                    <span>{{ person.name }}</span>
                    <span class="text-lava-yellow">@{{person.discordName}}</span>
                  </h3>
                  <div class="flex justify-between">
                    <span class="text-lava-orange">{{ person.role }}</span>
                    <a class="text-lava-yellow" :href="`mailto:${person.email}`">{{ person.email }}</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const people = [
  {
    name: 'Kalvin',
    discordName: 'Kalvin',
    role: 'CEO',
    imageUrl: '/imgs/team/kalvin.jpg',
    email: 'kalvin@lava.financial',
  },
  {
    name: 'Kyle',
    discordName: 'Appljuze',
    role: 'COO',
    imageUrl: '/imgs/team/appljuze.jpg',
    email: 'appljuze@lava.financial',
  },
  {
    name: 'Alan',
    discordName: 'Bitcoin Bart',
    role: 'Project Athena Manager',
    imageUrl: '/imgs/team/bart.jpg',
    email: 'bart@lava.financial',
  },
  {
    name: 'Ari',
    discordName: 'Ari',
    role: 'Founder',
    imageUrl: '/imgs/team/ari.jpg',
    email: 'ari@lava.financial',
  },
  {
    name: 'Sang',
    discordName: 'xMeeSeeksx',
    role: 'CFO',
    imageUrl: '/imgs/team/meeseeks.jpg',
    email: 'meeseeks@lava.financial',
  },
]
</script>
