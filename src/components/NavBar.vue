<script setup>
import { ref } from "vue";

const open = ref(false)
const emit = defineEmits(['toggle-menu'])
const toggleMenu = () => {
    open.value = !open.value;
    emit('toggle-menu')
}

</script>


<template>
  <div class="w-full bg-black h-20 flex items-center justify-between bg-opacity-[.67]">
      <div class="  w-full ml-10 py-2 relative z-40  flex justify-between items-center">
         <span class="cursor-pointer hidden lg:block">
            <img src="../assets/images/trcLogo.png" alt="">
         </span>

         <span class="text-2xl lg:hidden block md:ml-4 cursor-pointer ">
            <i @click="toggleMenu"  :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' ]" style="color: #e9a948;"></i>
         </span>
         
      </div>
     <div>
      <slot></slot>
     </div>
</div>

</template>