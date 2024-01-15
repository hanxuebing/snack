<script setup>
import { onMounted } from 'vue'
defineOptions({
  name: 'CpInput',
})

onMounted(() => {
  // debugger
  console.log('aaaa')
})
</script>
<template>
<div class="editor-field editor-field__textbox">
  <div class="editor-field__label-container">
    <label class="editor-field__label">11asd111123</label>
  </div>

  <div class="editor-field__container">
    <input type="text" class="editor-field__input" onfocus="generateNoise(this, 'input')"
      onblur="removeNoise(this, 'input')" />
  </div>
  <span class="editor-field__bottom"></span>
  <div class="editor-field__noise"></div>
</div>
</template>
<style lang="scss" scoped>

</style>