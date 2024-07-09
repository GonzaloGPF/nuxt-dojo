<script setup lang="ts">
definePageMeta({
    layout: 'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
})
</script>
<template>
    <div>
        <h1>This is the products index Page</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>
