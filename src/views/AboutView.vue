<template>
  <div class="">
    <input @keypress.enter="addCollection" v-model="bodyPart" class="p-2 rounded-lg border-2 border-sky-900" type="text"
      placeholder="Nombre de la colección">
    <button @click="addCollection" class="bg-sky-900 font-poppins text-white p-2 rounded-lg">Agregar Collection</button>
    <section class="my-4">
      <input v-model="bodyPartQuery" @keypress.enter="searchWord" class="p-2 rounded-lg border-2 border-sky-900"
        type="text" placeholder="Palabra a buscar ">
      <button @click="searchWord" class="bg-orange-900 font-poppins text-white p-2 rounded-lg">Encontrar
        palabra</button>
    </section>
  </div>
</template>

<!-- <script lang="ts" setup>
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { ref } from 'vue';

const bodyPart = ref('');
const bodyPartQuery = ref('');
const db = getFirestore();
const cuerpoRef = collection(db, 'cuerpo');


const addCollection = async () => {
  try {
    await addDoc(cuerpoRef, {
      bodyPart: bodyPart.value
    })
    bodyPart.value = '';
  } catch (error) {
    console.log(error);

  }
}

const searchWord = async () => {
  const queryWord = query(cuerpoRef, where('bodyPart', '==', bodyPartQuery.value));

  const snapshot = await getDocs(queryWord);

  if (snapshot.empty) {
    console.log(`No se encontró '${bodyPartQuery.value}' en la base de datos `)
  } else {
    snapshot.forEach(async e => {
      console.log(`Se encontró el documento ${e.id} ${JSON.stringify(e.data())}`);

      const docRefId = doc(cuerpoRef, e.id);
      await updateDoc(docRefId, {
        bodyPart: 'Valor nulo'
      })
      console.log('Se actualizó el documento');
    })
  }
}

</script> -->

<script setup lang="ts">
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { ref } from 'vue';

const bodyPart = ref('')
const bodyPartQuery = ref('')
const db = getFirestore();
const collectionRef = collection(db, 'body');

const addCollection = async() => {
   try {
      await addDoc(collectionRef,{
        bodyPart:bodyPart.value,
        userUid: '123465789'
      })
      console.log('Agregado correctamente');
   } catch (error) {
    console.log(error);
   }
}

const searchWord  = async () => {
  try {
      const queryComment = query(collectionRef, where('userUid', '==', bodyPartQuery.value));
      const snapshot = await getDocs(queryComment);
      if(snapshot.empty){
        console.log('No se encontró ese usuario');
      } else{
          snapshot.forEach(async e =>{
            const eId = doc(collectionRef, e.id);
            await deleteDoc(eId);
          })
      }
  } catch (error) {
    console.log(error);
    
  }
}
</script>
<style scoped></style>