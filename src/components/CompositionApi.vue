
<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})

const count = ref({key: 'This is String', key2: 'This is in Object form'});

const items = ref( {
    0: {id: 1, label: 'Party Hats', cat: 'Hats'},
    1: {id: 2, label: 'Cloths', cat: 'Upper'},
    2: {id: 3, label: 'Bottom', cat: 'Bottom'},
    3: {id: 4, label: 'Shirts', cat: 'Hats'}, 
    4: {id: 4, label: 'Below is V-Model', cat: 'Hats'}
    
})

const itemInput = ref('');

</script>

<template>
    <div>
        <h1> {{ msg }} </h1>
        <p> {{ count.key2  }}</p>
        <ul>
            <li 
                v-for=" ({ id, label }, index) in items" 
                :key="id">
                {{ index }}
                {{ label}} 
            </li>
        </ul>
        <input type="text" v-model="itemInput">
        <h2> {{ itemInput }}</h2>
    </div>
</template>





<style  scoped>
input {
    padding: 10px;
    border: 1px solid;
}
* {
    padding: 10px;
}
</style>