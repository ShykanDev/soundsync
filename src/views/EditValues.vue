<template>
    <section class="overflow-hidden animate-fade-left">

        <v-icon v-show="loading" name="ri-loader-5-line" scale="1.8"  class="fixed animate-spin text-sky-600 top-2 right-3"   />
        <RouterLink :to="{name: 'home'}" class="flex items-center bg-white rounded-bl-lg rounded-br-lg shadow-sm min-h-11">
            <div class="flex items-center gap-0 bg-white">
                <v-icon name="md-keyboardarrowleft-round" scale="2.5" color="#07a2f0" />
                <p class="text-lg font-medium text-sky-500 font-poppins">Regresar</p>
            </div>
        </RouterLink>
        <div class="fixed top-0 bottom-[-5%] left-0 right-0 bg-slate-100 -z-10"></div>
        
        <div class="flex flex-wrap w-full mb-8 justify-evenly gap-11">
            <div class="flex flex-wrap w-full mt-8 justify-evenly gap-11">
                <!-- Jos -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeJos }}%</p>
                    <input class="h-2" type="range" v-model="rangeJos" id="rangeJos">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Jos</span>
                    <img class="w-16 h-14" src="../assets/img/keboard.png" alt="">
                </div>
                <!-- Vale -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeVale }}%</p>
                    <input class="h-2" type="range" v-model="rangeVale" id="rangeVale">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Vale</span>
                    <img class="w-20 h-20" src="../assets/img/volin.png" alt="">
                </div>
                <!-- Ilse -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeIlse }}%</p>
                    <input class="h-2" type="range" v-model="rangeIlse" id="rangeIlse">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Ilse</span>
                    <img class="w-24 h-28" src="../assets/img/acoustic.png" alt="">
                </div>
                <!-- Isaac -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeIsaac }}%</p>
                    <input class="h-2" type="range" v-model="rangeIsaac" id="rangeIsaac">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Isaac</span>
                    <img class="w-20 h-20" src="../assets/img/electricG.png" alt="">
                </div>
                <!-- Ana -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeAna }}%</p>
                    <input class="h-2" type="range" v-model="rangeAna" id="rangeAna">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Ana</span>
                    <img class="w-20 h-20" src="../assets/img/flautin.png" alt="">
                </div>
                <!-- Sara -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeSara }}%</p>
                    <input class="h-2" type="range" v-model="rangeSara" id="rangeSara">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Sara</span>
                    <img class="w-20 h-20" src="../assets/img/chello.png" alt="">
                </div>
                <!-- Lucein -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeLucein }}%</p>
                    <input class="h-2" type="range" v-model="rangeLucein" id="rangeLucein">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Luzein</span>
                    <img class="w-16 h-14" src="../assets/img/trompeta.png" alt="">
                </div>
                <!-- Paty -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangePaty }}%</p>
                    <input class="h-2" type="range" v-model="rangePaty" id="rangePaty">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Paty</span>
                    <img class="w-16 h-14" src="../assets/img/trompeta.png" alt="">
                </div>
                <!-- Isvy -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeIsvy }}%</p>
                    <input class="h-2" type="range" v-model="rangeIsvy" id="rangeIsvy">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Isvy</span>
                    <img class="w-10 h-10" src="../assets/img/microfono.png" alt="">
                </div>
                <!-- Ami -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeAmi }}%</p>
                    <input class="h-2" type="range" v-model="rangeAmi" id="rangeAmi">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Amy</span>
                    <img class="w-10 h-10" src="../assets/img/microfono.png" alt="">
                </div>
                <!-- Alma -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeAlma }}%</p>
                    <input class="h-2" type="range" v-model="rangeAlma" id="rangeAlma">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Alma</span>
                    <img class="w-10 h-10" src="../assets/img/microfono.png" alt="">
                </div>
                <!-- Ale/Agus -->
                <div class="flex flex-col items-center bg-white gap-3 p-4 bg-wh8te rounded-lg shadow-lg hover:scale-105 transition-transform ease-in hover:border-[1px] border-sky-700">
                    <p class="px-3 font-semibold text-white rounded-lg bg-sky-800 font-poppins">{{ rangeAleAgus }}%</p>
                    <input class="h-2" type="range" v-model="rangeAleAgus" id="rangeAleAgus">
                    <span class="px-4 font-semibold text-white rounded-full font-poppins bg-sky-700">Ale/Agus</span>
                    <img class="w-20 h-20" src="../assets/img/drums.png" alt="">
                </div>
            </div>
            <!-- <button @click="saveValues" class="p-2 text-xl rounded-lg text-wh8te bg-sky-700 hover:bg-sky-800 active:scale-95 font-poppins">Guardar</button> -->

            <section class="w-full max-w-md p-6 m-2 bg-white rounded-lg shadow-lg font-poppins">
        <h2 class="mb-4 text-2xl font-medium">Nota nueva</h2>
        <form>
            <div class="mb-4">
                <label for="message" class="block mb-2 font-medium text-gray-700">Mensaje</label>
                <textarea @keypress.enter="addNote" v-model="note" id="message" rows="4" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
            </div>
            <button @click.prevent="addNote" type="submit" class="w-full py-2 text-white rounded-lg bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">
                Enviar
            </button>
        </form>


    </section>
    <div>
        <ButtonSave 
        class="px-4 py-2 my-4 text-white transition-transform rounded-lg shadow-lg  bg-sky-700 hover:bg-sky-800 focus:ring-2 focus:ring-sky-500 active:scale-95"
        @click="saveValues"
    />
    </div>
            </div>
        
    </section>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const loading = ref(false);
const note = ref('');
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

import { addDoc, collection, doc, getDoc, getFirestore, onSnapshot, Timestamp, updateDoc } from "firebase/firestore";
import ButtonSave from '@/components/buttons/ButtonSave.vue';

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
  loading.value = true;
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

    loading.value = false;
  } catch (error) {
    console.error("Error updating document: ", error);
    loading.value = false;
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


const notesRef = collection(db, 'notes');
const addNote = async() => {
    try {
      const noteDoc =  await addDoc(notesRef,{
            note: note.value,
            date: Timestamp.fromDate(new Date())
        })
        await updateDoc(noteDoc, {idDoc: noteDoc.id})
        toast("Nota Enviada", {
      "theme": "light",
      "type": "success",
      "dangerouslyHTMLString": true
    })
        note.value = '';
    } catch (error) {
        console.log(error);
        
    }
}
</script>

<style scoped>
</style>