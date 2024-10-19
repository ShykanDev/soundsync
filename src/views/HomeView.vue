<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="flex items-center justify-center bg-slate-100 min-h-12">
      <h1>SoundSync</h1>
    </div>

    <!-- Content -->
    <section>
      <BarChart></BarChart>
    </section>
  </div>
</template>

<script lang="ts" setup>
import BarChart from '@/components/charts/BarChart.vue';

</script>

<style scoped>

</style>
