<script setup lang="ts">
defineProps({
    product: Object
})
</script>
<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product" class="thumb mx-auto max-h-32" />
        <p class="font-bold text-gray-500 m-4 truncate" v-text="product.title" />
        <NuxtLink :to="`products/${product.id}`">
            <span class="btn my-y">View Details</span>
        </NuxtLink>
    </div>
</template>