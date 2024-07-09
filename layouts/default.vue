<script setup lang="ts">

</script>
<template>
    <div>
        <header class="shadow-sm bg-white container mx-auto p-4">
            <nav class="flex justify-between">
                <NuxtLink to="/" class="font-bold">Home</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/abc">Error</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style>
.router-link-exact-active {
    color: #12b488
}
</style>