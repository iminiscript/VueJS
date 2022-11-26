<template>
    <div class="Products">
        <h1>{{ title}} </h1>
        <h2>{{ category }} </h2>
        <p>{{ desc }} </p>
        <h3>{{ price }}</h3>
        <p> {{ id }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
        title: String,
        category: String,
        desc: String,
        price: String,
        id:  String,
    });

</script>
    