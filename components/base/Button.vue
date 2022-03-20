<template>
  <button
      :class="[baseClasses, typeClasses]"
      :type="isSubmitType ? 'submit' : 'button'"
      :disabled="disabled"
      @click="$emit('click')"
      v-if="!href && !to"
  >
    <slot/>
  </button>
  <a
      :class="[baseClasses, typeClasses]"
      :href="href"
      :target="target"
      v-else-if="!to"
  >
    <slot/>
  </a>
  <router-link
      :class="[baseClasses, typeClasses]"
      :to="to"
      v-else
  >
    <slot/>
  </router-link>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  to: {
    type: Object
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  isSubmitType: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<'primary' | 'default' | 'clean'>,
    default: 'default'
  },
  size: {
    type: String as PropType<'big' | 'default'>,
    default: 'default'
  }
});

// eslint-disable-next-line no-undef
const emits = defineEmits(['click']);

const baseClasses = 'flex justify-center items-center space-x-2 transition duration-200 ease-in-out focus:outline-none hover:no-underline disabled:text-slate-500';

const typeClasses = computed(() => {
  let classes = 'border disabled:bg-slate-200 disabled:border-transparent ';

  // paddings and size
  switch (props.size) {
    case 'big':
      classes += 'px-5 py-2.5 text-xl md:px-6 md:py-3 md:text-2xl';
      break;
    default:
      classes += 'px-3 py-1.5';
  }

  classes += ' '

  // type colors
  switch (props.type) {
    case 'primary':
      classes += 'text-lava-orange border-lava-orange hover:text-white hover:bg-lava-orange-hover';
      break;
    case 'clean':
      classes = '';
      break;
    default:
      classes += 'border-slate-200 hover:border-lava-orange hover:text-lava-orange';
  }
  return classes;
});
</script>
