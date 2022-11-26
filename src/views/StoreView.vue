<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '@/stores/ProductStore.js'
// import { storeToRefs } from 'pinia';

// const { items } = storeToRefs(useProductStore());

const productStore = useProductStore();

productStore.fill();

// items.fill();

</script>

<template>
    <div>
        <h2> Store</h2>
        <div class="props">
            <ProductCard 
                v-for="item in productStore.products.items"
                :key="item.id" 
                :title="item.name"
                :category="item.category"
                :desc="item.description"
                :price="'$' + item.price"
                :id="item.id"
                
            />
        </div>
    </div>
</template>


<style scoped>
.props {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 20px;
    
}
.dynamicProp{
    border: 1px solid red;
    padding: 20px;
}
</style>