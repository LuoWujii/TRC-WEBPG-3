<script setup>
import NavBar from '@/components/NavBar.vue';
import ScrimForm from '@/components/ScrimForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const next = ref(false)

const toggleNext = ()=> {
   next.value = !next.value
}
const emit = defineEmits(['submit'])
 const props =  defineProps({
   scrim: {
     type: Object,
     default: {}
   },
   errors: {
     type: Object,
     default: {}
   }
 })

 const scrim = ref({
    clanName: '',
    teamName: '',
    teamLeader: '',
    ign: '',
    ign2: '',
    ign3: '',
    ign4: '',
})
const errors = ref({
    clanName: '',
    teamName: '',
    teamLeader: '',
    ign: '',
    ign2: '',
    ign3: '',
    ign4: '',
})
const submitForm = ()=> {
  
    if (scrim.value.clanName == '') {
        errors.value.clanName = 'The clan name is required'
    } else if (scrim.value.teamName == '') {
        errors.value.teamName = 'Team name is required'
    } else if (scrim.value.teamLeader == '') {
        errors.value.teamLeader = 'Team Leader is required'
    } else if (scrim.value.ign == '') {
        errors.value.ign = 'IGN is required'
    }
    else if (scrim.value.ign2 == '') {
        errors.value.ign2 = 'IGN is required'
    }
    else if (scrim.value.ign3 == '') {
        errors.value.ign3 = 'IGN is required'
    }
    else if (scrim.value.ign4 == '') {
        errors.value.ign4 = 'IGN is required'
      } else {
         emit("submit", scrim.value)
          console.log('scrim', scrim.value);
          errors.value = ''
          router.push('/brScrim')
          }
      }


</script>

<template>
  <div class=" w-full h-full">
    <div class="absolute bg-[#4892E9] h-screen w-screen bg-opacity-[0.13] -z-10"></div>
    <div class="page h-screen w-screen bg-cover bg-no-repeat -z-20 absolute bg-center"></div>
    <NavBar>
        <div class=" mr-36 flex justify-end">
            <router-link :to="{name: 'home'}">
         <button class="hidden lg:block bg-homeBtn hover:bg-hoverBtn px-14 text-white rounded-md py-2">
            Home
         </button>
        </router-link>
         <div class="flex justify-center items-center "> 
            <router-link :to="{name: 'home'}">
               <span class="lg:hidden flex h-20 w-20 items-center cursor-pointer">
               <img src="../assets/images/logoL.png" alt="">
            </span>
            </router-link>
         </div>
        </div>
       </NavBar>
         
   <div class="flex">
      
      <ScrimForm @submitForm="submitForm" :scrim="scrim" :errors="errors" formType="mpScrim">

   </ScrimForm>
     
    

    
   </div>
  </div>
</template>



<style lang="scss" scoped>
 .page {
    background-image: url('../assets/images/MpScrim.png');
 }
</style>