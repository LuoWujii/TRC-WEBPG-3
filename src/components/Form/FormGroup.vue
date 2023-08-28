
<script setup>
import { defineAsyncComponent } from 'vue';

import Input from './Input.vue';
import Label from './Label.vue';

const emit = defineEmits(['update:modelValue'])
defineProps({
    type: String,
    placeholder: String,
    label: String,
    labelClasses: String,
    inputClasses: String,
    modelValue: String | Number,
    error: String,
    disabled: String
})

const passInputValue = (value)=> {
    emit("update:modelValue", value)
}

</script>

<template>
    <div class=" flex flex-col">
        <Label :class="labelClasses" >{{ label }}</Label>
        <Input @update:modelValue="passInputValue($event)" :modelValue="modelValue" :class="inputClasses" :disabled="disabled" :placeholder="placeholder" :type="type" /> 
        <span v-show="error" class=" text-red-600 text-sm  "  >{{ error }} </span>
    </div> 
    </template>


