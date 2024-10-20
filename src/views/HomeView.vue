<template>
  <div class="animate-fade-right">
    <!-- Header -->
    <div class="flex items-center justify-center bg-white shadow-sm min-h-12 portrait:hidden landscape:flex">
      <h1 class="text-xl font-medium text-sky-800 font-poppins">SoundSync</h1>
      <RouterLink :to="{ name: 'edit' }"
        class="fixed top-0 left-0 flex items-center justify-end gap-0 right-[5%] min-h-12">
        <!-- <v-icon name="md-keyboardarrowleft-round" scale="2.5" color="#07a2f0" /> -->
        <p class="text-lg font-medium text-sky-500 font-poppins">Editar</p>
      </RouterLink>
    </div>

    <!-- Rotate your phone -->
    <div class="fixed top-0 bottom-0 left-0 right-0 z-40 bg-black portrait:block landscape:hidden min-h-dvh"></div>
    <div class="z-50 flex flex-col items-center justify-center landscape:hidden portrait:flex">
      <img src="../assets/mobile.gif" class="w-[160px] z-50" alt="">
    </div>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-slate-100 -z-20 portrait:block landscape:hidden"></div>

    <div v-if="!showChart" class="flex justify-center w-full mt-4">
    <CloudLoading/>
    </div>

    <!-- Content -->
    <section v-if="showChart" class="portrait:hidden landscape:flex-initial">
      <BarChart class="min-h-56" :data="rangeValues" ></BarChart>
    </section>
    <!-- <div v-if="showChart && showImages" class="flex items-center gap-5 px-5 overflow-auto w-dvw">
      <img class="w-12 h-11" src="../assets/img/keboard.png" alt="">
      <img class="w-12 h-12 " src="../assets/img/volin.png" alt="">
      <img class="w-14 h-14" src="../assets/img/acoustic.png" alt="">
      <img class="w-12 h-12" src="../assets/img/electricG.png" alt="">
      <img class="h-12 w-7" src="../assets/img/flautin.png" alt="">
      <img class="h-14 w-9" src="../assets/img/chello2.png" alt="">
      <img class="w-12 h-9" src="../assets/img/trompeta.png" alt="">
      <img class="w-12 h-9" src="../assets/img/trompeta.png" alt="">
      <img class="w-8 h-8" src="../assets/img/microfono.png" alt="">
      <img class="w-8 h-8" src="../assets/img/microfono.png" alt="">
      <img class="w-8 h-8" src="../assets/img/microfono.png" alt="">
      <img class="w-12 h-12" src="../assets/img/drums.png" alt="">
      <img class="w-12 h-12 opacity-0" src="../assets/img/drums.png" alt="">
    </div> -->

    <!-- <div v-if="showChart" class="flex items-center justify-start w-full px-4 min-h-14">
           <button class="px-3 py-1 font-semibold text-white rounded-lg bg-sky-600 font-poppins" @click="toggleImages">{{ showImages ? 'Ocultar imágenes' : 'Mostrar imágenes' }}</button>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import BarChart from '@/components/charts/BarChart.vue';
import { ref } from 'vue';

let showChart = ref(false);
let showImages = ref(false);

const toggleImages = () => {
  showImages.value = !showImages.value;
}


import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import CloudLoading from '@/components/animations/CloudLoading.vue';


// Initialize rangeValues as an empty array
let rangeValues = ref<number[]>([]); 

const db = getFirestore();
const myCollectionRef = collection(db, "myCollection");

let toggleChart = () => {
  showChart.value = false;
  setTimeout(() => {
    showChart.value = true
  },600)
}

const unsubscribe = onSnapshot(myCollectionRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "modified" || change.type === "added") {
      const data = change.doc.data();
      console.log("New document: ", data.numeros); // Log the received array
      let arrayNumeros = data.numeros;
      arrayNumeros.push(100)
      rangeValues.value = arrayNumeros;
      toggleChart();
    }
  });
});
</script>

<style scoped>
.inset-shadow {
  @apply shadow-inner; /* Esto aplicaría una sombra interna por defecto en Tailwind */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Personaliza la sombra interna */
}
</style>
