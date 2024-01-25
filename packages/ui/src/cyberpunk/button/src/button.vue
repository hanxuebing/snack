<script setup>
import '../style/button.scss'
import { onMounted } from 'vue'
defineOptions({
  name: 'CpButton',
})
const props = defineProps({
  btnText: {
    type: String,
    default: 'Button_'
  },
  primaryHue: {
    type: String,
    default: '0'
  },
  primaryLightness: {
    type: String,
    default: '50'
  }
})

onMounted(() => {
})
</script>
<template>
<button class="cybr-btn" :style="{ '--primary-hue': props.primaryHue, '--primary-lightness': props.primaryLightness }">
  {{ props.btnText }}
  <span aria-hidden class="cybr-btn__glitch">{{ props.btnText }}</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
</template>
<style lang="scss" scoped>
</style>