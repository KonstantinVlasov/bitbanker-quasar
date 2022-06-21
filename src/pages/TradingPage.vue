<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import GroupLayout from '../libs/groupLayout'

let layout : GroupLayout
const layoutContainer = ref<HTMLElement>()

onMounted(() => {
  console.log('layoutContainer.value', layoutContainer.value)
  if (layoutContainer.value) {
    layout = new GroupLayout(layoutContainer.value)
  }
})

onBeforeUnmount(() => {
  if (layout) {
    layout.destroy()
  }
})
</script>

<template>
  <div>
    hello
    <div ref="layoutContainer">world</div>
    <div ref="layoutContainer2">world 2</div>
  </div>
</template>
