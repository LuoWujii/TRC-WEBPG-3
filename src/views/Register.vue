<script setup>
import {ref} from 'vue'
import NavBar from '@/components/NavBar.vue';
import RegisterForm from '@/components/RegisterForm.vue';


const emit = defineEmits(['submit'])
const props = defineProps({
   user: {
      type: Object,
      default: {}
   },
   errors: {
     type: Object,
     default: {}
   }
})

const user = ref ({
    firstName: '',
    lastName: '',
    ign: '',
    email: '',
    password: '',
    confirmPassword: ''
 })
 const errors = ref ({
    firstName: '',
    lastName: '',
    ign: '',
    email: '',
    password: '',
    confirmPassword: ''
 })

 const submitForm = ()=> {

 if(user.value.firstName == '') {
  errors.value.firstName = 'The First Name is required'
}
else if ( user.value.lastName == '') {
  errors.value.lastName = 'The Last Name is required '
} 
else if ( user.value.ign == '') {
  errors.value.ign = 'IGN is required'
} 
else if ( user.value.email == '') {
  errors.value.email = 'Email is required'
} 
// else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(user.value.email)) {
//         errors.value.email = 'Invalid email';
// }                                                    
else if (user.value.password == '') {
  errors.value.password = 'Password is required'
} 
else if ( user.value.password.length < 8) {
  errors.value.password = 'Password must be at least 8 Characters '
} 
else if (user.value.confirmPassword !== user.value.password ) {
  errors.value.confirmPassword = 'The password must be the same'
} else {
   localStorage.setItem('firstName', JSON.stringify(user.value.firstName))
   localStorage.setItem('lastName', JSON.stringify(user.value.lastName))
   localStorage.setItem('InGameName', JSON.stringify(user.value.ign))
   localStorage.setItem('email', JSON.stringify(user.value.email))
   localStorage.setItem('password', JSON.stringify(user.value.password))
   localStorage.setItem('confirmPassword', JSON.stringify(user.value.confirmPassword))
   localStorage.setItem('user', JSON.stringify(user.value))

   alert('Congratulation, you can login now!😁')
   alert('Enjoy!😉')
 } 
}


</script>

<template>
  
<div class="h-full w-full">
   <div class="absolute bg-[#4892E9] h-screen w-screen bg-opacity-[0.13] -z-10"></div>
    <div class="page h-screen w-screen bg-cover bg-no-repeat absolute bg-center -z-20"></div>
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
       
<div class="flex justify-center w-full m-auto">
   <RegisterForm  @submit-form="submitForm" :errors="errors" :user="user" />
</div>
      
</div>

</template>




<style scoped>
 .page {
    /* background-image: url('../assets/images/RegisterBg.png'); */

    background-image: url('../assets/images/registerBg.png');
 }
</style>