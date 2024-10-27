<template>
  <div>
    <Bar :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { defineProps } from 'vue';
// Chart imports
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
    data:{
      type:Array,
      required:true,
    }
})

const chartData = reactive({
  labels: ['Jos', 'Vale', 'Ilse', 'Isaac', 'Ana', 'Sara', 'Luzein', 'Paty', 'Isvy', 'Ami', 'Alma', 'Ale/Agus', 'Max'],
  datasets: [{
    label: 'Sound Level',
    backgroundColor: [
       '#f85549', // Jos - Rojo
    '#ffab4b', // Vale - Naranja
    '#ffd138', // Ilse - Amarillo
    '#5cb85c', // Isaac - Verde
    '#42adff', // Ana - Azul
    '#673ab7', // Sara - Morado
    '#3f51b5', // Lucein - Azul oscuro
    '#e91e63', // Paty - Rosa oscuro
    '#8bc34a', // Isvy - Verde claro
    '#ffab2e', // Ami - Naranja claro
    '#f44336', // Alma - Rojo intenso
    '#9c27b0', // Ale/Agus - Púrpura
    '#028df0'  // Max - Azul (ignorar este color)
    ],
    data: props.data
  }]
})

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        font: {
          size: 13, // Cambia el tamaño de la fuente de las etiquetas del eje X
          family: 'Poppins', // Cambia la fuente
          weight: 'bold' // Estilo de la fuente (opcional)
        }
      }
    },
    y: {
      ticks: {
        font: {
          size: 11, // Cambia el tamaño de la fuente de las etiquetas del eje Y
          family: 'Poppins',
          weight: 'bold'
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 0, // Cambia el tamaño de la fuente del legend (leyenda)
            family: 'Poppins',
          weight: 'bold'
        }
      }
    }
  }
})
</script>

<style scoped></style>