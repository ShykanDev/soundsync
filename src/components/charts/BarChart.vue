<template>
  <div>
    <Bar :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// Chart imports
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive({
  labels: ['Jos', 'Vale', 'Ilse', 'Isaac', 'Ana', 'Sara', 'Lucein', 'Paty', 'Isvy', 'Ami', 'Alma', 'Ale/Agus', 'Max'],
  datasets: [{
    label: 'SoundSync Data',
    backgroundColor: [
      '#FFB3BA', // Rosa suave
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
      '#B3E5FC'  // Azul cielo claro
    ],
    data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 100]
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
          family: 'Sans-Serif', // Cambia la fuente
          weight: 'bold' // Estilo de la fuente (opcional)
        }
      }
    },
    y: {
      ticks: {
        font: {
          size: 11, // Cambia el tamaño de la fuente de las etiquetas del eje Y
          family: 'Arial',
          weight: 'bold'
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 11, // Cambia el tamaño de la fuente del legend (leyenda)
          family: 'Arial',
          weight: 'bold'
        }
      }
    }
  }
})
</script>

<style scoped></style>