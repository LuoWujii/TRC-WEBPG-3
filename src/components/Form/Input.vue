<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
    modelValue: String | Number, 
    type: String | null,
    placeholder: String,
    disabled: String
  
})

const emit = defineEmits(['update:modelValue']);

const isShown = ref(false);
const computedInputType = computed(() => {
  return props.type == 'password' ? isShown.value ? 'text' : 'password' : props.type 
});
</script>

<template>
  <div class="relative">
    <input class="bg-inputCol py-5 disabled:text-center px-5 disabled:py-3 disabled:bg-homeBtn disabled:text-buttonColor disabled:text-lg text-xs rounded-md w-full"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    :disabled="disabled"
    :type="computedInputType"/>
    <div class="" v-if="type == 'password'">
      <i @click="isShown = !isShown" :class="isShown ? 'fa-eye-slash' : 'fa-eye'" class="fa-regular duration-100  ease-in-out active:bg-black active:bg-opacity-10 p-2 rounded-full cursor-pointer absolute top-3 right-4"></i>
    </div>
  </div>
</template>


<style>

</style>