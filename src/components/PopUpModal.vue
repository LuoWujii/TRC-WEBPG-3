<script setup>
const emit = defineEmits(['disagree', 'agree'])
</script>

<template>
   <div class="bg-black w-screen h-screen z-50 absolute bg-opacity-75"></div>
   <div class="absolute flex justify-center !z-50 h-full w-full items-center">
    <div class="bg-white w-full flex flex-col items-center max-w-md rounded-lg ">
   <h1 class="my-5 font-bold text-lg">Are you sure?</h1>
   <div class=" my-5 h-full w-full">
    <button @click="emit('disagree')" class="bg-red-500 hover:opacity-90 duration-200 text-white mx-2 py-1 px-5 rounded-md">No</button>
    <button @click="emit('agree')" class="bg-green-500 hover:opacity-90 duration-200 text-white mx-2 py-1 px-5 rounded-md">Yes</button>
    
   </div>
    </div>
   </div>
</template>



<style>

</style>