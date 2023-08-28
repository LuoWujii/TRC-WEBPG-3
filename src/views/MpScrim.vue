<script setup>  
 import NavBar from '@/components/NavBar.vue';
 import ScrimForm from '@/components/ScrimForm.vue';
 import {ref, watch} from 'vue'
 import PopDone from '@/components/PopDone.vue';
import Alert from '@/components/Alert.vue';

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
 const exit = ref(false)

 
 const toggleMenu = () =>{
   exit.value = !exit.value
}

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
        
        localStorage.setItem('scrim', JSON.stringify(scrim.value))
        localStorage.setItem('scrim-ClanName', JSON.stringify(scrim.value.clanName))
        localStorage.setItem('scrim-TeamName', JSON.stringify(scrim.value.teamName))
        localStorage.setItem('scrim-TeamLeader', JSON.stringify(scrim.value.teamLeader))
        localStorage.setItem('scrim-IGN', JSON.stringify(scrim.value.ign))
        localStorage.setItem('scrim-IGN2', JSON.stringify(scrim.value.ign2))
        localStorage.setItem('scrim-IGN3', JSON.stringify(scrim.value.ign3))
        localStorage.setItem('scrim-IGN4', JSON.stringify(scrim.value.ign4))
        errors.value = ''
          alert()
        scrim.value = ''
            setTimeout(()=> {
              alert()
            }, 4000)
            
          }
      }

      const setNewVueListLocalStorage = () => {
  localStorage.setItem('scrim-info', JSON.stringify(scrim.value))
 }

 watch(scrim, ()=>{
  setNewVueListLocalStorage()
 },
 {
  deep: true
 }
 )
 const fetchScrimInfo = () => {
  const savedScrimInfo =  JSON.parse(localStorage.getItem('scrim-info'))
  if (savedScrimInfo) {
    scrim.value = savedScrimInfo
 }
}

fetchScrimInfo()

const isTrue = ref(false)

const alert = ()=> {
  isTrue.value = !isTrue.value
}


</script>


<template>
  
  <PopDone v-if="exit"  @agree="toggleMenu" />
  <v-alert text="The request has been sent. Please wait for our response" variant="tonal"></v-alert>
  <div class=" w-full h-full">
    <div class="absolute bg-[#4892E9] h-screen w-screen bg-opacity-[0.13] -z-10"></div>
    <div class="page min-h-screen max-h-full w-screen bg-cover bg-no-repeat -z-20 absolute bg-center"></div>
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
       <Transition>
        <Alert v-show="isTrue" />
       </Transition>
    <ScrimForm formType="mpScrim" @submitForm="submitForm" :scrim="scrim" :errors="errors" />

    
  </div>
</template>


<style lang="scss" scoped>
 
 .page{
    background-image: url('../assets/images/MpScrim.png');
 }

 v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>