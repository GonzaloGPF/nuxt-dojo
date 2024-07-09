<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold" v-text="error.statusCode" />
    <p class="mt-7 text-6xl">Oops</p>
    <p class="mt-7" v-text="error.message" />
    <button class="btn my-7" @click="handleClearError">Go Home...</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(['error']);

const handleClearError = () => clearError({ redirect: '/' });
</script>

<style>

</style>