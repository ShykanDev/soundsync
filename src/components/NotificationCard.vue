<template>
    <div class="max-w-[400px] font-poppins border border-gray-200 rounded-xl bg-white bg-opacity-95 p-3 shadow-lg">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center rounded-full bg-blue-400 p-2 text-white">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
            <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
          </svg>
        </span>
        <p class="font-semibold text-gray-600 text-sm">Nueva nota</p>
      </div>
  
      <p class="mt-3 text-gray-600 text-sm">
        {{ message }}
      </p>
  
      <!-- convert timpestamp to date
        -->

      <small class="text-gray-400 text-xs">{{ new Date(date.toDate()).toLocaleString() }}</small>


      <div class="mt-3 flex justify-end">
        <!-- <p href="" class="inline-block bg-blue-600 text-white rounded-lg py-2 px-4 text-sm font-semibold hover:bg-blue-700">
          Aceptar
        </p> -->
      </div>
    </div>
  </template>
  

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    message:{
        type:String,
        required:true
    },
    date:{
        type:Object,
        required:true
    }
})
</script>

<style scoped>

</style>