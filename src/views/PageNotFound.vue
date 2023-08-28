<script setup>
import { Transition } from 'vue'
import FormGroup from "@/components/Form/FormGroup.vue";
import Validation from "@/components/Validation.vue";
import { ref, watch, watchEffect } from "vue";
import PopUpModal from '@/components/PopUpModal.vue';
import PopDone from '@/components/PopDone.vue';


const exit = ref(false)
const password = ref('')
const passLength = ref(false)
const passwordNumber = ref(false)
const passCap = ref(false)
const passSpecial = ref(false)
const passName =  ref(false)

const stopEffect = watchEffect(() => {
      console.log('watchEffect', password.value);
    })
const setNewVueListLocalStorage = () => {
  localStorage.setItem('password', JSON.stringify(password.value))
 }

 watch(password, ()=>{
  setNewVueListLocalStorage()
 },
 {
  deep: true
 }
 )
 


watch(password,()=> {
  if(password.value.length > 4) {
    passLength.value = true
  } else if (password.value.length < 5) {
    passLength.value = false
  }
})

watch(password,()=> {
  if (password.value.match(/[0-9]/i)){
    passwordNumber.value = true
  } else {
    return passwordNumber.value = false
  }

})

watch(password,()=> {
  if (password.value.match(/[^A-Za-z0-9-'']/i)){
    passSpecial.value = true
  } else {
    return passSpecial.value = false
  }

})
watch(password,()=> {
  if (password.value.match(/[A-Z]/g)){
    passCap.value = true
  } else {
    return passCap.value = false
  }

})
watch(password,()=> {
  if (password.value.includes('starbucks')){
    toggleModal()
  } else {
    return passName.value = false
  }

})
const agree = ()=> {
  passName.value = true
  toggleModal()
}



  // const fetchPassword = () => {
  //   const savedPass =  JSON.parse(localStorage.getItem('password'))
  //   if (savedPass) {
  //     password.value = savedPass
  //  }
  // }

  // fetchPassword()


// watch(password, ()=>{
//   if ( passLength || passwordNumber || passCap || passSpecial  || passName  ) {
//     alert('hello')
//     password.value = ''
//   }
// })
const openModal = ref(false)

const toggleModal = () => {
  openModal.value = !openModal.value
}

defineProps({
  openModal: {
    type: Boolean,
    default: false,
  },
  scrimType: {
        type: String,
        default: "mpScrim" | "brScrim" | 'scrims'
    },
})

const firstName =  JSON.parse(localStorage.getItem('firstName'))
const lastName =  JSON.parse(localStorage.getItem('lastName'))
const clanName =  JSON.parse(localStorage.getItem('scrim-ClanName'))
const teamName =  JSON.parse(localStorage.getItem('scrim-TeamName'))
const teamLeader =  JSON.parse(localStorage.getItem('scrim-TeamLeader'))
const ign =  JSON.parse(localStorage.getItem('scrim-IGN'))
const ign2 =  JSON.parse(localStorage.getItem('scrim-IGN2'))
const ign3 =  JSON.parse(localStorage.getItem('scrim-IGN3'))
const ign4 =  JSON.parse(localStorage.getItem('scrim-IGN4'))


        // localStorage.setItem('scrim-ClanName', JSON.stringify(scrim.value.clanName))
        // localStorage.setItem('scrim-TeamName', JSON.stringify(scrim.value.teamName))
        // localStorage.setItem('scrim-TeamLeader', JSON.stringify(scrim.value.teamLeader))
        // localStorage.setItem('scrim-IGN', JSON.stringify(scrim.value.ign))
        // localStorage.setItem('scrim-IGN2', JSON.stringify(scrim.value.ign2))
        // localStorage.setItem('scrim-IGN3', JSON.stringify(scrim.value.ign3))
        // localStorage.setItem('scrim-IGN4', JSON.stringify(scrim.value.ign4))
    


// if( passLength && passwordNumber  && passCap && passSpecial && passName ) {
//   alert('Congratulation')
// }
</script>


<!-- <template>
  
  <div class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-black lg:grid-cols-[max(50%,36rem),1fr]">
    <header class="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
      <a href="#">
        <span class="sr-only">Your Company</span>
        <img class=" w-32 h-32" src="../assets/images/logoL.png" alt="" />
      </a>
    </header>
    <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
      <div class="max-w-lg">
        <p class="text-base font-semibold leading-8  text-hoverBtn">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-homeBtn sm:text-5xl">Wala makit-an ang panid</h1>
        <p class="mt-6 text-base leading-7 text-buttonColor">Sorry, wala namo makit-an ang page nga imong gipangita.</p>
        <div class="mt-10">
          <a href="#" class="text-sm font-semibold leading-7 hover:text-homeBtn duration-500 text-hoverBtn"><span aria-hidden="true">&larr;</span> Pag-uli sa balay</a>
        </div>
      </div>
    </main>
    <footer class="self-end lg:col-span-2 z-50 lg:col-start-1 lg:row-start-3">
      <div class="border-t border-gray-100 bg-gray-50 py-10">
        <nav class="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
          <a href="#">Contact support</a>
          <svg viewBox="0 0 2 2" aria-hidden="true" class="h-0.5 w-0.5 fill-gray-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <a href="#">Status</a>
          <svg viewBox="0 0 2 2" aria-hidden="true" class="h-0.5 w-0.5 fill-gray-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <a href="#">Twitter</a>
        </nav>
      </div>
    </footer>
    <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
      <img src="../assets/images/MpScrim.png" class="absolute inset-0 h-full w-full object-cover"  alt="">
    </div>
  </div>
</template> -->


<template>
  
  <PopUpModal @disagree="toggleModal" @agree="agree" v-if="openModal" /> 
  
  <div class="w-full lg:flex
   h-full   justify-center duration-700 items-center">
    <div class=" flex justify-center items-center w-full h-full">

     
      <div class=" bg-buttonColor rounded-lg h-[500px] w-full max-w-md mx-5 z-20 p-5">
<div>
  <h1 class="font-bold">
      <h1 class=" text-lg">Hello</h1> {{ firstName }} {{ lastName }}</h1>
    </div>
    <div class=" gap-5 flex">
      <FormGroup 
class=""
v-model="clanName"
label="Clan Name"
disabled
type="text" />
      <FormGroup 
v-model="teamName"
label="Team Name"
disabled
type="text" />
    </div>
    <div class=" mt-5 mx-24">
      <FormGroup 

v-model="teamLeader"
label="Team Leader"
disabled
type="text" />
    </div>
    <div class="flex gap-5 mt-5">
      <FormGroup 

v-model="ign"
label="IGN"
disabled
type="text" />
<FormGroup 

v-model="ign2"
label="IGN"
disabled
type="text" />
    </div>
    <div class="flex gap-5 mt-5">
      <FormGroup 

v-model="ign3"
label="IGN"
disabled
type="text" />
<FormGroup 

v-model="ign4"
label="IGN"
disabled
type="text" />
    </div>
      </div>
    </div>
    <div class=" w-full h-full flex items-center ">
      <div class="bg-black bg-opacity-5  rounded-lg h-[500px] w-full max-w-md mx-5 z-20 p-5">
    <FormGroup type="password" placeholder="password" v-model="password" />
       
    <div class="mt-5 rounded-xl shadow-inner  py-2 px-3 flex flex-col w-full bg-black bg-opacity-5 overflow-y-auto h-[380px]  ">
      <Transition>
        <div class="hover:opacity-90 shadow-xl hover:scale-95 cursor-pointer duration-300 transition-all ease-in-out  my-2 w-full rounded-lg" :class="[passName ? 'bg-green-300' : 'bg-red-400' ]"  v-if="passSpecial && passwordNumber && passLength && passCap">
        <div class=" duration-300 transition-all ease-in-out w-full rounded-t-lg py-2 " :class="[passName ? 'bg-green-500' : 'bg-red-500' ]">
          <i class="my-3 w-full justify-center" :class="[passName ? 'fa-solid fa-check fa-sm' : 'fa-solid fa-x fa-xs']">
          </i>
        </div>
        <h1 class="py-4"> Name this one. </h1>

        <div class="flex justify-center">
          <img src="../assets/images/dss.png" class="h-[100px] w-[100px]" alt="">
          
        </div>
      </div>
      </Transition>

      <Transition>
        <div class="hover:opacity-90 shadow-xl hover:scale-95 cursor-pointer duration-300 transition-all ease-in-out  my-2 w-full rounded-lg" :class="[passSpecial ? 'bg-green-300' : 'bg-red-400' ]"  v-if=" passwordNumber && passLength && passCap">
        <div class=" duration-300 transition-all ease-in-out w-full rounded-t-lg py-2 " :class="[passSpecial ? 'bg-green-500' : 'bg-red-500' ]">
          <i class="my-3 w-full justify-center" :class="[passSpecial ? 'fa-solid fa-check fa-sm' : 'fa-solid fa-x fa-xs']"></i>
        </div>
        <h1 class="py-4"> Your Password must include Special character. </h1>
      </div>
      </Transition>

      <Transition>
        <div class="hover:opacity-90 shadow-xl hover:scale-95 cursor-pointer duration-300 transition-all ease-in-out  my-2 w-full rounded-lg" :class="[passCap ? 'bg-green-300' : 'bg-red-400' ]"  v-if="passwordNumber && passLength">
        <div class=" duration-300 transition-all ease-in-out w-full rounded-t-lg py-2 " :class="[passCap ? 'bg-green-500' : 'bg-red-500' ]">
          <i class="my-3 w-full justify-center" :class="[passCap ? 'fa-solid fa-check fa-sm' : 'fa-solid fa-x fa-xs']"></i>
        </div>
        <h1 class="py-4"> Your Password must include uppercase letter. </h1>
      </div>
      </Transition>

      <Transition>
        <div class="hover:opacity-90 shadow-xl hover:scale-95 cursor-pointer duration-300 transition-all 
        ease-in-out  my-2 w-full rounded-lg" :class="[passwordNumber ? 'bg-green-300' : 'bg-red-400' ]"  v-if="passLength">
        <div class="duration-300 transition-all ease-in-out  w-full rounded-t-lg py-2 " :class="[passwordNumber ? 'bg-green-500' : 'bg-red-500' ]">
          <i class="my-3 w-full justify-center" :class="[passwordNumber ? 'fa-solid fa-check fa-sm' : 'fa-solid fa-x fa-xs']"></i>
        </div>
        <h1 class="py-4"> Your Password must include number. </h1>
      </div>
      </Transition>
      
      <Transition>
        <!-- <i class="fa-solid fa-x fa-sm" style="color: #f00000;"></i> -->
        <!-- <i class="fa-solid fa-check fa-sm" style="color: #00ff1e;"></i> -->
        <div class="hover:opacity-90 shadow-xl hover:scale-95 cursor-pointer overflow-hidden duration-300 transition-all ease-in-out  w-full rounded-lg" :class="[passLength ? 'bg-green-300' : 'bg-red-400' ]"  v-if="password.length > 0 ">
        <div class="flex items-center duration-300 transition-all ease-in-out  w-full rounded-t-lg py-2 " :class="[passLength ? 'bg-green-500' : 'bg-red-500' ]">
          <i class="my-3 w-full justify-center" :class="[passLength ? 'fa-solid fa-check fa-sm' : 'fa-solid fa-x fa-xs']"></i>
        </div>
        <h1 class="py-4"> Your password must be at least 5 Characters. </h1>
      </div>
      <div class="flex justify-center items-center rounded-lg h-full w-full" v-else>
            <img src="../assets/images/donp.jpg" class="h-[200px] hover:rounded-none rounded-xl opacity-90 hover:opacity-100 shadow-xl hover:w-[215px] hover:h-[215px] cursor-pointer duration-300  w-[200px]" alt="">
       </div>
      </Transition>
      

      
  
     
      
    </div>
    <div>
      <button class=" my-10 bg-neutral-500 disabled:cursor-not-allowed disabled:text-white font-semibold disabled:bg-black disabled:bg-opacity-5 py-1 px-3 rounded-md cursor-pointer " :disabled="!passName || !passLength || !passwordNumber || !passCap || !passSpecial" >HEHEHE</button>
    </div>
    
    </div>
    </div>
    
  </div>

</template>


<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
  
  
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>