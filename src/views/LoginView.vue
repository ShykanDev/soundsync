        <template>
    <div class="flex flex-col items-center justify-center w-full ">
        <div class="flex flex-col items-center justify-center w-11/12 gap-1 p-1 font-poppins rounded-xl animate-fade-left md:w-5/12" >
            <RouterLink :to="{name: 'home'}" class="flex items-center w-full gap-0">
            <v-icon name="md-keyboardarrowleft-round" scale="2.5" color="#07a2f0" />
            <p class="text-lg font-medium text-sky-500 font-poppins">Regresar</p>   
        </RouterLink>
            <h1 class="mb-5 mt-6 font-medium text-2xl text-[#006EAD] md:text-3xl">Iniciar Sesión</h1>
            <div class="flex flex-col justify-center w-11/12 mt-4">
                <label class="flex items-center self-start text-lg font-medium text-sky-800" for="email">Email</label>
                <input v-model="email" class="border w-full text-lg text-center h-12 border-[#006EAD] rounded-md focus:outline-none focus:border-[#006EAD] placeholder:text-slate-700" type="email" name="email" id="email" placeholder="usuario@email.com" required title="Enter the email address registered with your account" autocomplete="off">
            </div>
            <div class="flex flex-col justify-center w-11/12 mt-4">
                <label class="flex items-center self-start gap-1 text-lg font-medium text-sky-800" for="password">Password</label>
                <input v-model="password" class="border border-[#006EAD] placeholder:text-slate-700 w-full text-lg text-center h-12 rounded-md focus:outline-none focus:border-[#006EAD]" type="password" name="password" id="password" placeholder="**********"/>
            </div>
            <div class="flex flex-col justify-center w-11/12 mt-2">
            </div>
            <button @click="login" class="w-11/12 mt-5 mb-4 p-2 border border-slate-400 text-[#006EAD] bg-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import BarChart from '@/components/charts/BarChart.vue';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLoginStore } from "@/store/UseLoginStore";
import router from "@/router";
import { ref } from "vue";

let email = ref('');
let password = ref('');

const auth = getAuth();
const storeLogin = useLoginStore();
const login = async () => {
    if (email.value === '' || password.value === '') {
        showToastWarning();
        return;
    }
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        if (userCredential) {
            storeLogin.setIsLogin(true);
            setTimeout(() => {
                router.push({ name: 'edit' });
            }, 2000);
            showToastSuccess();
        } else {
            showToastError();
            storeLogin.setIsLogin(false);
        }
    } catch (error) {
        showToastError();
        console.log(error);
        storeLogin.setIsLogin(false);        
    }
}

const showToastSuccess = () => {
    toast("Sesion iniciada, bienvenido/a", {
      "theme": "light",
      "type": "default",
      "dangerouslyHTMLString": true
    })
}
const showToastError = () => {
    toast("No hay ningun usuario registrado con los datos ingresados", {
      "theme": "light",
      "type": "error",
      "dangerouslyHTMLString": true
    })
}
const showToastWarning = () => {
    toast("Verifica haber ingresado todos los datos", {
      "theme": "light",
      "type": "warning",
      "dangerouslyHTMLString": true
    })
}


</script>

<style scoped>

</style>