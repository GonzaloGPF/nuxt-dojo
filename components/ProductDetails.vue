<script setup lang="ts">
defineProps(['product'])
</script>
<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="mx-auto my-7 max-h-52" />
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7" v-text="product.title" />
                <span class="text-xl my-7">Price - ${{ product.price }}</span>
                <p class="mb-7" v-text="product.description"/>
                <button class="btn flex items-center">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>