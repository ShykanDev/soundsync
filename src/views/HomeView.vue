<template>
  <div class="animate-fade-right">
    <!-- Header -->
    <div class="flex items-center justify-center bg-white shadow-sm min-h-12 portrait:hidden landscape:flex">
      <h1 class="text-xl font-medium text-sky-800 font-poppins">SoundSync</h1>
      <div class="fixed top-0 left-0 flex items-center justify-end gap-0 right-[5%] min-h-12">
        <RouterLink :to="{ name: 'edit' }">
          <v-icon name="gi-settings-knobs" scale="1.5" class="text-sky-800" />
        </RouterLink>
      </div>
    </div>
    <!-- div to confirm close -->
    <!-- <div class="fixed top-0 bottom-0 left-0 right-0 z-50 w-full bg-black"></div> -->

    <!-- Rotate your phone notice -->

    <!-- <div class="fixed top-0 bottom-0 left-0 right-0 z-40 bg-black"></div> -->
    <div class="fixed top-0 bottom-0 left-0 right-0 z-40 backdrop-blur-sm portrait:block landscape:hidden min-h-dvh"></div>
    <div class="z-50 flex flex-col items-center justify-center landscape:hidden portrait:flex">
      <!-- <img src="../assets/mobile.gif" class="w-[160px] z-50" alt=""> -->
      <v-icon name="io-phone-landscape-outline" scale="9" flip="" class="z-50 text-sky-950" />
      <h1 class="z-50 text-xl font-medium text-black font-poppins">Gira el teléfono</h1>
    </div>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-slate-100 -z-20 portrait:block landscape:hidden"></div>

    <!-- Content section -->
    <section class="">
      <!-- Adding the key here to force chart re-render -->
      <BarChart ref="barChart" class="min-h-56" :data="rangeValues" :key="chartKey"></BarChart>
    </section>

    <h2 class="my-5 text-xl font-medium text-sky-950 font font-poppins ">Notas</h2>
    <section v-if="notesArr" class="flex flex-wrap justify-center px-2 space-x-5 space-y-3 overflow-y-auto max-h-96">
      <NotificationCard v-for="note in notesArr.sort((a, b) => b.date - a.date)" :key="note" class="animate-fade-up " :class="{'border-[1px] border-sky-700 animate-shake animate-delay-500' : notesArr[0] == note}" :message="note.note" :date="note.date" :doc-id="note.idDoc"/>
    </section>
    <h3 class="text-sm font-poppins text-slate-600">Las notas se eliminarán en 24 horas</h3>
  </div>
</template>

<script lang="ts" setup>
import BarChart from '@/components/charts/BarChart.vue';
import { onUnmounted, ref } from 'vue';
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import NotificationCard from '@/components/NotificationCard.vue';

// Reactive variables
let rangeValues = ref<number[]>([]);     // Holds the data array for the chart
let chartKey = ref(0);                   // Reactive key to force chart re-render

const db = getFirestore();               // Initialize Firestore
const myCollectionRef = collection(db, "myCollection");  // Reference to a Firestore collection

// Function to update the chart key and force a re-render
const updateChartKey = () => {
  chartKey.value += 1;
}

// Listen to Firestore collection changes
const unsubscribe = onSnapshot(myCollectionRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "modified" || change.type === "added") {
      const data = change.doc.data();
      let arrayNumeros = data.numeros;
      arrayNumeros.push(100);  // Example of data manipulation
      rangeValues.value = arrayNumeros;
      
      // Force chart re-render by updating the key
      updateChartKey();
    }
  });
});
const notesArr = ref(); // Almacena las notas

const notesRef = collection(db, 'notes');

// Escucha los cambios en tiempo real
const unsubscribeNotes = onSnapshot(notesRef, (snapshot) => {
  // Limpia el array para evitar duplicados
  notesArr.value = snapshot.docs.map((doc) => doc.data());
});

onUnmounted(() => {
  unsubscribe();
  unsubscribeNotes();
})
</script>

<style scoped></style>
