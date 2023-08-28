<script setup>
defineProps({
    modelValue: String | Number,
})

</script>


<template>
  <div class=" bg-red-500 w-full py-4 rounded-lg">
      <slot />
  </div>
</template>



<style>

</style>