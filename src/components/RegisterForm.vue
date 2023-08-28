<script setup>
import { reactive, ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import LinkImage from '../components/LinkImage.vue';
 const FormGroup = defineAsyncComponent(()=> 
 import('./Form/FormGroup.vue'))

 const props = defineProps({
  formType: {
    type: String,
    default: 'signup' || 'submit' || 'login'
  },
    user: {
      type: Object,
      default: {}
    },
    errors: {
      type: Object,
      default: {}
    }
 })

 const emit = defineEmits(['submit', 'submit-form'])

 
</script>

<template>
  <div class="w-full flex justify-center">
    <form class=" p-5 max-w-md rounded-2xl mt-8 md:mt-28 bg-black  w-full bg-opacity-[.67] mx-3" @submit.prevent="submitForm">

<div class="flex justify-center gap-2">

  <div v-if="formType == 'login'" class="flex justify-center">
    <span class="flex justify-center m-auto">
      <img class="h-36 w-36" src="../assets/images/logoL.png" alt="">
    </span>
  </div>
    <FormGroup class="w-full"
    v-if="formType == 'signup'"
    v-model="props.user.firstName" 
    :error="props.errors.firstName"
    placeholder="First name" 
    type="text" />
    <FormGroup 
    class="w-full"
    v-if="formType == 'signup'"
    v-model="props.user.lastName" 
    :error="props.errors.lastName"
    placeholder="Last name" 
    type="text" />
</div>
<FormGroup  
v-if="formType == 'signup'"
class="mt-7"
v-model="props.user.ign" 
:error="props.errors.ign"
placeholder="IGN" 
type="text" />

<FormGroup  class="my-7"
v-model="props.user.email" 
:error="props.errors.email"
placeholder="Email" 
type="email" />

<FormGroup 

v-model="props.user.password" 
:error="props.errors.password"
placeholder="Password" 
type="password" />

<FormGroup 
v-if="formType == 'signup'"
class="my-7"
v-model="props.user.confirmPassword" 
:error="props.errors.confirmPassword"
placeholder="Confirm Password" 
type="password" />


<div class="mx-8 mt-8">
    <button @click="emit('submitForm')"  v-if="formType !== 'login'"
    class=" p-2 bg-buttonColor font-semibold text-white text-sm rounded-md px-16"
     >{{ formType == 'signup' ? "Sign Up" : "Submit" }}</button>
</div>
<div class="mx-8 mt-8">
    <button @click="emit('submitForm')" v-if="formType == 'login'"
    class=" p-2 bg-homeBtn hover:bg-hoverBtn duration-200 font-semibold text-white text-sm rounded-md px-16"
     >{{ formType == 'login' ? "Log In" : "Submit" }}</button>
</div>
<p  v-if="formType == 'login'" class="my-5 cursor-pointer text-white decoration-solid decoration-white underline ">Forgot Password?</p>

<div v-if="formType == 'login'" class=" border-t border-inputCol">

  <router-link :to="{name: 'register'}">
    <button @click="emit('submit-form')" v-if="formType == 'login'"
    class="  p-2 mt-8 bg-buttonColor hover:bg-hoverCol duration-200 font-semibold text-white text-sm rounded-md px-16"
     >{{ formType == 'login' ? "Sign Up" : "Submit" }}</button>
  </router-link>

     <p class="text-white m-1 mt-2-" >or</p>

  <LinkImage />
   
</div>
</form>
  </div>
</template>



<style>

</style>