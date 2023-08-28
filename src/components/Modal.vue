<script setup>
import { onMounted, ref, mounted} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

  defineEmits(['closeModal'])

const multiplayer = ref(false)
const battleRoyale = ref(false)

const handleRoute = () => {
  if (multiplayer.value && battleRoyale.value) {
    router.push('/mpScrim')
  }
   else if (multiplayer.value) {
   router.push('/mpScrim' )
  }
  else if (battleRoyale.value) {
    router.push('/brScrim')
  }
 
    
  }


</script>


<template>
    
    <div class="bg-black w-screen h-screen z-50 absolute bg-opacity-75"></div>
    <div class="absolute flex justify-center !z-50 h-full w-full items-center">
      <div class="four m-3 bg-black bg-opacity-80 w-full max-w-2xl flex items-center gap-3 p-3 flex-col rounded-2xl">
        <h1 class=" hidden md:block text-buttonColor text-5xl font-Abril">SCRIMMAGE</h1>
        <h1 class=" text-buttonColor text-lg font-bold">SELECT MODE</h1>
        <div class="flex-col lg:flex-row flex w-full h-full " >
          
          <div class="w-full h-full flex flex-col items-center">
            <h1 class="font-semibold text-buttonColor py-5">Multiplayer (MP)</h1>
            <div class="box h-[150px] w-auto justify-center flex relative">
              <i class="icon absolute z-50 cursor-pointer top-5 left-2 " @click="multiplayer = !multiplayer" :class="[multiplayer ? 'fa-solid fa-circle-check fa-lg !opacity-100' : 'fa-regular fa-circle fa-lg']" style="color: #e9a948;"></i>
              
              <div
              @click="multiplayer = !multiplayer" 
            :class="{ 'scale-105 rounded-none opacity-70' : multiplayer}"  class="mp bg-cover h-full lg:hover:scale-105 w-[300px] lg:hover:opacity-70  
            rounded-2xl ease-in-out lg:hover:rounded-none cursor-pointer duration-700 transition-all " 
            >
          </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center ">
            <h1 class="font-semibold text-buttonColor py-5">Battle Royale (BR)</h1>
            <div class="w-full h-full flex justify-center">
              
              <div class="box h-[150px] w-auto justify-center flex relative">
              <i class="icon absolute z-50 cursor-pointer top-5 left-2 " @click="battleRoyale = !battleRoyale" :class="[battleRoyale ? 'fa-solid fa-circle-check fa-lg !opacity-100' : 'fa-regular fa-circle fa-lg ']" style="color: #e9a948;"></i>
              <!-- <img v-show="battleRoyale !== false" src="../assets/images/yey.gif" class="duration-500 transition-all absolute top-1 right-2 z-50 w-16 h-16 " alt=""> -->
            <div 
            @click="battleRoyale = !battleRoyale" :class="{ 'scale-105 rounded-none opacity-70' : battleRoyale}"
             class="img ease-in-out  bg-cover h-full animate-[wiggle_1s_ease-in-out_infinite] active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:hover:scale-105 w-[300px] rounded-2xl   cursor-pointer 
            duration-700 transition-all lg:hover:rounded-none lg:hover:opacity-70" >
            
          </div>
             </div>
            </div>
           
        </div>
      </div>
       <div class="w-full gap-10 flex my-5 px-20">
        <button @click="$emit('closeModal')" class=" duration-700 transition-all hover:text-buttonColor bg-homeBtn hover:bg-hoverBtn rounded-xl text-white w-full py-2">
        {{ !multiplayer && !battleRoyale ? 'Close' : 'Cancel' }}</button>
        <button 
        @click="handleRoute"
        :disabled="!multiplayer && !battleRoyale" 
        class="duration-700 disabled:cursor-not-allowed 
        disabled:text-textDisable disabled:bg-disable 
        transition-all bg-buttonColor text-white 
        hover:bg-hoverCol py-2 w-full rounded-xl ">Next</button>
       </div>
      
       </div>
    </div>


</template>



<style lang="scss" scoped>
.box {
  .icon{
    opacity: 0;
    transition: 500ms ease-in-out;

  }
  &:hover{
    .icon {
      opacity: 1;
    }
  }
}
.img {
  background-image: url('../assets/images/br.png');
}
.img:hover {
  background-image: url('../assets/images/battleR.gif');
}
.mp{
  background-image: url('../assets/images/mp.jpg');
}
.mp:hover {
  background-image: url('../assets/images/bgGif.gif');
}
</style>