<script setup>
const emit = defineEmits(['agree'])
</script>

<template>
   <div class="bg-black w-screen h-screen z-50 absolute bg-opacity-75"></div>
   <div class="absolute flex justify-center !z-50 h-full w-full items-center">
     
    <div class="bg-white w-full flex flex-col items-center max-w-md rounded-lg ">
      <div class="w-full bg-black bg-opacity-5 items-center py-3 flex justify-end pr-5 h-full">
      <i @click="emit('agree')" class="cursor-pointer fa-solid fa-x fa-sm py-3" style="color: #f00000;"></i>
     </div>
   <div class="w-full h-full" >
      <h1 class="my-2 font-bold text-lg">Your request has been sent to our admin💗</h1>
   <h1 class="mb-5 font-bold text-lg">Please wait patiently our response</h1>
   </div>
    </div>
   </div>
</template>



<style>

</style>