<template>
    <div class="max-w-[400px] font-poppins border border-gray-200 rounded-xl bg-white bg-opacity-95 p-3 shadow-lg">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center p-2 text-white bg-blue-400 rounded-full">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
            <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
          </svg>
        </span>
        <p class="text-sm font-semibold text-gray-600">Nueva nota</p>
      </div>
  
      <p class="mt-3 text-sm text-gray-600">
        {{ message }}
      </p>
  
      <!-- convert timpestamp to date
        -->
        
        <small class="text-xs text-gray-400">{{ new Date(date.toDate()).toLocaleString() }}</small>
        
        <div class="flex justify-end mt-3">
        <button @click="deleteNote" class="inline-block px-4 py-2 text-sm font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700">Eliminar Nota</button>
        <!-- <p href="" class="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Aceptar
        </p> -->
      </div>
    </div>
  </template>
  

<script lang="ts" setup>
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { defineProps } from 'vue';
const props = defineProps({
    message:{
        type:String,
        required:true
    },
    date:{
        type:Object,
        required:true
    },
    docId:{
        type:String,
        required:true
    }
})
const db = getFirestore();
const deleteNote = async ( ) => {
  try {
    const noteDoc = doc(db, "notes", props.docId);    
    await deleteDoc(noteDoc);
  } catch (error) {
    console.log(error);
    
  }
}


</script>

<style scoped>

</style>