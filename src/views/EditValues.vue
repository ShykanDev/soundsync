<template>
    <section class="animate-fade-left">
        <RouterLink :to="{name: 'home'}" class="flex items-center bg-white rounded-bl-lg rounded-br-lg shadow-sm min-h-11">
            <div class="flex items-center gap-0">
                <v-icon name="md-keyboardarrowleft-round" scale="2.5" color="#07a2f0" />
                <p class="text-lg font-medium text-sky-500 font-poppins">Regresar</p>
            </div>
        </RouterLink>
        <div class="fixed top-0 bottom-[-5%] left-0 right-0 bg-slate-100 -z-10"></div>
        
        <div class="flex flex-wrap w-full mb-8 justify-evenly gap-11">
            <div class="flex flex-wrap w-full mt-8 justify-evenly gap-11">
                <!-- Jos -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#f85549] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeJos }}%</p>
                    <input class="h-2" type="range" v-model="rangeJos" id="rangeJos">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#f85549] rounded-full">Jos</span>
                    <img class="w-16 h-14" src="../assets/img/keboard.png" alt="">
                </div>
                <!-- Vale -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#ffab4b] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeVale }}%</p>
                    <input class="h-2" type="range" v-model="rangeVale" id="rangeVale">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#ffab4b] rounded-full">Vale</span>
                    <img class="w-20 h-20" src="../assets/img/volin.png" alt="">
                </div>
                <!-- Ilse -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#fff132] rounded-lg text-slate-600 font-poppins font-semibold px-3">{{ rangeIlse }}%</p>
                    <input class="h-2" type="range" v-model="rangeIlse" id="rangeIlse">
                    <span class="px-4 text-slate-600 font-semibold font-poppins bg-[#ffd138] rounded-full">Ilse</span>
                    <img class="w-24 h-28" src="../assets/img/acoustic.png" alt="">
                </div>
                <!-- Isaac -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#5cb85c] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeIsaac }}%</p>
                    <input class="h-2" type="range" v-model="rangeIsaac" id="rangeIsaac">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#5cb85c] rounded-full">Isaac</span>
                    <img class="w-20 h-20" src="../assets/img/electricG.png" alt="">
                </div>
                <!-- Ana -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#42adff] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeAna }}%</p>
                    <input class="h-2" type="range" v-model="rangeAna" id="rangeAna">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#42adff] rounded-full">Ana</span>
                    <img class="w-20 h-20" src="../assets/img/flautin.png" alt="">
                </div>
                <!-- Sara -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#673ab7] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeSara }}%</p>
                    <input class="h-2" type="range" v-model="rangeSara" id="rangeSara">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#673ab7] rounded-full">Sara</span>
                    <img class="w-20 h-20" src="../assets/img/chello.png" alt="">
                </div>
                <!-- Lucein -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#3f51b5] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeLucein }}%</p>
                    <input class="h-2" type="range" v-model="rangeLucein" id="rangeLucein">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#3f51b5] rounded-full">Lucein</span>
                    <img class="w-20 h-20" src="../assets/img/trompeta.png" alt="">
                </div>
                <!-- Paty -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#e91e63] rounded-lg text-white font-poppins font-semibold px-3">{{ rangePaty }}%</p>
                    <input class="h-2" type="range" v-model="rangePaty" id="rangePaty">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#e91e63] rounded-full">Paty</span>
                    <img class="w-20 h-20" src="../assets/img/trompeta.png" alt="">
                </div>
                <!-- Isvy -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#8bc34a] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeIsvy }}%</p>
                    <input class="h-2" type="range" v-model="rangeIsvy" id="rangeIsvy">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#8bc34a] rounded-full">Isvy</span>
                    <img class="w-20 h-20" src="../assets/img/microfono.png" alt="">
                </div>
                <!-- Ami -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#ffab2e] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeAmi }}%</p>
                    <input class="h-2" type="range" v-model="rangeAmi" id="rangeAmi">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#ffab2e] rounded-full">Ami</span>
                    <img class="w-20 h-20" src="../assets/img/microfono.png" alt="">
                </div>
                <!-- Alma -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#f44336] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeAlma }}%</p>
                    <input class="h-2" type="range" v-model="rangeAlma" id="rangeAlma">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#f44336] rounded-full">Alma</span>
                    <img class="w-20 h-20" src="../assets/img/microfono.png" alt="">
                </div>
                <!-- Ale/Agus -->
                <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
                    <p class="bg-[#9c27b0] rounded-lg text-white font-poppins font-semibold px-3">{{ rangeAleAgus }}%</p>
                    <input class="h-2" type="range" v-model="rangeAleAgus" id="rangeAleAgus">
                    <span class="px-4 text-white font-semibold font-poppins bg-[#9c27b0] rounded-full">Ale/Agus</span>
                    <img class="w-20 h-20" src="../assets/img/drums.png" alt="">
                </div>
            </div>
            <button @click="saveValues" class="p-2 text-xl text-white rounded-lg bg-sky-700 font-poppins">Guardar</button>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

let rangeJos = ref(40);
let rangeVale = ref(40);
let rangeIlse = ref(40);
let rangeIsaac = ref(40);
let rangeAna = ref(40);
let rangeSara = ref(40);
let rangeLucein = ref(40);
let rangePaty = ref(40);
let rangeIsvy = ref(40);
let rangeAmi = ref(40);
let rangeAlma = ref(40);
let rangeAleAgus = ref(40);

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { collection, doc, getDoc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";

const db = getFirestore();
const myCollectionRef = collection(db, "myCollection");

const unsubscribe = onSnapshot(myCollectionRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if(change){
        const data = change.doc.data();
        console.log("New document: ", data.numeros); //type of is object y yo quiero array no se que hacer
        let arrayNumeros = data.numeros;
        rangeJos.value = arrayNumeros[0];
        rangeVale.value = arrayNumeros[1];
        rangeIlse.value = arrayNumeros[2];
        rangeIsaac.value = arrayNumeros[3];
        rangeAna.value = arrayNumeros[4];
        rangeSara.value = arrayNumeros[5];  
        rangeLucein.value = arrayNumeros[6];
        rangePaty.value = arrayNumeros[7];
        rangeIsvy.value = arrayNumeros[8];
        rangeAmi.value = arrayNumeros[9];
        rangeAlma.value = arrayNumeros[10];
        rangeAleAgus.value = arrayNumeros[11];
      }
    if (change.type === "modified") {
        const data = change.doc.data();
        console.log("New document: ", data.numeros); //type of is object y yo quiero array no se que hacer
        let arrayNumeros = data.numeros;
        rangeJos.value = arrayNumeros[0];
        rangeVale.value = arrayNumeros[1];
        rangeIlse.value = arrayNumeros[2];
        rangeIsaac.value = arrayNumeros[3];
        rangeAna.value = arrayNumeros[4];
        rangeSara.value = arrayNumeros[5];  
        rangeLucein.value = arrayNumeros[6];
        rangePaty.value = arrayNumeros[7];
        rangeIsvy.value = arrayNumeros[8];
        rangeAmi.value = arrayNumeros[9];
        rangeAlma.value = arrayNumeros[10];
        rangeAleAgus.value = arrayNumeros[11];
    }
  });
});

let musicValues = ref([rangeJos.value, rangeVale.value, rangeIlse.value, rangeIsaac.value, rangeAna.value, rangeSara.value, rangeLucein.value, rangePaty.value, rangeIsvy.value, rangeAmi.value, rangeAlma.value, rangeAleAgus.value]);
const saveValues = async () => {
  // Crear un array con los valores actuales de los sliders
  const musicValues = [
    rangeJos.value, rangeVale.value, rangeIlse.value, rangeIsaac.value, 
    rangeAna.value, rangeSara.value, rangeLucein.value, rangePaty.value, 
    rangeIsvy.value, rangeAmi.value, rangeAlma.value, rangeAleAgus.value
  ];

  try {
    // Referencia al documento que deseas actualizar
    const docRef = doc(db, "myCollection", "B6mAx2hlam0BjGnoajDd");

    // Actualizar el documento con los nuevos valores
    await updateDoc(docRef, {
      numeros: musicValues // Cambia "numeros" por el campo que tengas en tu base de datos
    });
    showToastSuccess();
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
// Para dejar de escuchar los cambios:
// unsubscribe();
const showToastSuccess = () => {
    toast("Valores Actualizados", {
      "theme": "light",
      "type": "success",
      "dangerouslyHTMLString": true
    })
}
</script>

<style scoped>
</style>