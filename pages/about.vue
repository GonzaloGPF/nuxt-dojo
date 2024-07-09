<script setup lang="ts">

const { data } = useFetch('/api/ninja')

</script>
<template>
    <div>
        <h1>This is About Page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur labore est reiciendis non dolorem dignissimos iusto corrupti suscipit asperiores, quibusdam voluptatem quia, sunt dicta explicabo optio. Velit inventore quaerat neque?</p>
        <p>{{ data }}</p>
    </div>
</template>