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
  labels: ['Jos', 'Vale', 'Ilse', 'Isaac', 'Ana', 'Sara', 'Lucein', 'Paty', 'Isvy', 'Ami', 'Alma', 'Ale/Agus', 'Max'],
  datasets: [{
    label: 'Sound Level',
    backgroundColor: [
      '#ff867d', // Rosa suave
      '#FFDFBA', // Naranja pastel
      '#FFFFBA', // Amarillo pastel
      '#BAFFC9', // Verde menta
      '#BAE1FF', // Azul pastel
      '#D1C4E9', // Lila pastel
      '#C5CAE9', // Azul lavanda
      '#F8BBD0', // Rosa claro
      '#DCEDC8', // Verde claro
      '#FFF9C4', // Amarillo claro
      '#FFCCBC', // Naranja claro
      '#E1BEE7', // Lila claro
      '#028df0'  // Azul cielo claro
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