<script setup>
import { ref } from 'vue';
import FormGroup from './Form/FormGroup.vue';
import { useRouter } from 'vue-router'
import router from '@/router';

const emit = defineEmits(['submit', 'submitForm'])

const props = defineProps({
    formType: {
        type: String,
        default: "mpScrim" | "brScrim" | 'scrims'
    },
    scrim: {
        type: Object,
        default: {}
    },
    errors: {
        type: Object,
        default: {}
    }
})


</script>

<template>
    
  <div class=" w-full flex-col flex items-center ">
   <div class="flex  md:p-7  flex-col">
    <h1 class=" hidden md:block text-homeBtn font-Abril text-6xl ">THE RED CONQUEROR</h1>
    <h1 class="my-5 uppercase  text-homeBtn font-Abril text-4xl ">
        {{ formType !== 'brScrim' ? 'multiplayer scrimmage' : 'battle royale scrimmage' }}
    </h1>
   </div>
    <form class=" p-5 max-w-md rounded-2xl bg-black  w-full bg-opacity-[.67] mx-3" @submit.prevent="submitForm">
    
        <FormGroup class="mb-6"
        :error="props.errors.clanName"
        v-model="props.scrim.clanName"
        placeholder="Clan Name"
        type="text"/>

        <FormGroup
        :error="props.errors.teamName"
        v-model="props.scrim.teamName"
        placeholder="Team Name"
        type="text"/>
        <h1 class="my-5 font-Titillium text-white ">Players</h1>

        <div class="flex justify-center">
            <FormGroup

        v-if="formType == 'mpScrim'"
        :error="props.errors.teamLeader"
        v-model="props.scrim.teamLeader"
        placeholder="Team Leader"
        type="text"/>
        </div>
        <div class="flex justify-center gap-6 mt-5 ">
            <FormGroup
            :error="props.errors.ign"
            v-model="props.scrim.ign"
            placeholder="IGN"
        type="text"/>
        <FormGroup
        :error="props.errors.ign2"
        v-model="props.scrim.ign2"
        placeholder="IGN"
        type="text"/>
    </div>
    <div class="flex justify-center gap-6 mt-5 ">
  <FormGroup
   :error="props.errors.ign3"
    v-model="props.scrim.ign3"
    placeholder="IGN"
    type="text"/>
    <FormGroup
    :error="props.errors.ign4"
     v-model="props.scrim.ign4"
     placeholder="IGN"
     type="text"/>
</div>
        <button @click="emit('submitForm')" 
    class=" hover:bg-hoverCol duration-300 transition-all p-2 mt-8 bg-buttonColor font-semibold text-white text-sm rounded-md px-16"
     >Submit</button>
     <slot/>
    </form>

  </div>
</template>


<style>

</style>