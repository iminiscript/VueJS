<template>
    <div>
        <h2>{{ title }}</h2>
        <div>
            <h1>Click Counter {{ count }} </h1>
            <button @click="incrimentCount">Begin the Counter</button>
        </div>
        <div>
            <h1>Hover Counter {{ count }}</h1>
            <button @mouseover="incrimentCount"> Hover over me to begin the counter</button>
        </div>
       
    </div>
</template>

<script setup>
import useCounter from '../composables/useCounter';
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const title = ref('Life cycle hooks with Composition API');

// Destrcture the functions and passed the values for arguments
const {count, incrimentCount} = useCounter(100,10);

onBeforeMount(() => {
    console.log("🚀 ~ onBeforeMount");
    
}),

onMounted(() => {
    console.log("🚀 ~ onMounted");  
}),

onBeforeUpdate(() => {
    console.log("🚀 ~ onBeforeUpdate");
    
}),

onUpdated(() => {
    console.log("🚀 ~ onUpdated");
    
}),

onBeforeUnmount(() => {
    console.log("🚀 ~ onBeforeUnmount");
    
}),

onUnmounted(() => {
    console.log("🚀 ~ onUnmounted");
    
})
</script>

<style lang="scss" scoped>

</style>