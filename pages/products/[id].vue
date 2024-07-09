<script setup lang="ts">
definePageMeta({
    layout: 'products'
})
const { params } = useRoute();

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${params.id}`);

if (! product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}

</script>
<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>
